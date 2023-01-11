

package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.SpeakeasyHTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

/** SDK Documentation: https://docs.aws.amazon.com/elasticache/ - Amazon Web Services documentation**/
public class SDK {
	public static final String[] SERVERS = {
		"http://elasticache.{region}.amazonaws.com",
		"https://elasticache.{region}.amazonaws.com",
		"http://elasticache.{region}.amazonaws.com.cn",
		"https://elasticache.{region}.amazonaws.com.cn",
	};
  		

	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private openapisdk.models.shared.Security _security;
	private String _serverUrl;
	private String _language = "java";
	private String _sdkVersion = "0.0.1";
	private String _genVersion = "internal";

	public static class Builder {
		private HTTPClient client;
		private openapisdk.models.shared.Security security;
		private String serverUrl;
		private java.util.Map<String, String> params = new java.util.HashMap<String, String>();

		private Builder() {
		}

		public Builder setClient(HTTPClient client) {
			this.client = client;
			return this;
		}
		
		public Builder setSecurity(openapisdk.models.shared.Security security) {
			this.security = security;
			return this;
		}
		
		public Builder setServerURL(String serverUrl) {
			this.serverUrl = serverUrl;
			return this;
		}
		
		public Builder setServerURL(String serverUrl, java.util.Map<String, String> params) {
			this.serverUrl = serverUrl;
			this.params = params;
			return this;
		}
		
		public SDK build() throws Exception {
			return new SDK(this.client, this.security, this.serverUrl, this.params);
		}
	}

	public static Builder builder() {
		return new Builder();
	}

	private SDK(HTTPClient client, openapisdk.models.shared.Security security, String serverUrl, java.util.Map<String, String> params) throws Exception {
		this._defaultClient = client;
		
		if (this._defaultClient == null) {
			this._defaultClient = new SpeakeasyHTTPClient();
		}
		
		if (security != null) {
			this._security = security;
			this._securityClient = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, this._security);
		}
		
		if (this._securityClient == null) {
			this._securityClient = this._defaultClient;
		}

		if (serverUrl != null && !serverUrl.isBlank()) {
			this._serverUrl = openapisdk.utils.Utils.replaceParameters(serverUrl, params);
		}
		
		if (this._serverUrl == null) {
			this._serverUrl = SERVERS[0];
		}
		
	}
	
	
    /**
     * getAuthorizeCacheSecurityGroupIngress - <p>Allows network ingress to a cache security group. Applications using ElastiCache must be running on Amazon EC2, and Amazon EC2 security groups are used as the authorization mechanism.</p> <note> <p>You cannot authorize ingress from an Amazon EC2 security group in one region to an ElastiCache cluster in another region.</p> </note>
    **/
    public openapisdk.models.operations.GetAuthorizeCacheSecurityGroupIngressResponse getAuthorizeCacheSecurityGroupIngress(openapisdk.models.operations.GetAuthorizeCacheSecurityGroupIngressRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=AuthorizeCacheSecurityGroupIngress");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAuthorizeCacheSecurityGroupIngressResponse res = new openapisdk.models.operations.GetAuthorizeCacheSecurityGroupIngressResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getBatchApplyUpdateAction - Apply the service update. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/applying-updates.html">Applying Service Updates</a>.
    **/
    public openapisdk.models.operations.GetBatchApplyUpdateActionResponse getBatchApplyUpdateAction(openapisdk.models.operations.GetBatchApplyUpdateActionRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=BatchApplyUpdateAction");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetBatchApplyUpdateActionResponse res = new openapisdk.models.operations.GetBatchApplyUpdateActionResponse() {{
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getBatchStopUpdateAction - Stop the service update. For more information on service updates and stopping them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/stopping-self-service-updates.html">Stopping Service Updates</a>.
    **/
    public openapisdk.models.operations.GetBatchStopUpdateActionResponse getBatchStopUpdateAction(openapisdk.models.operations.GetBatchStopUpdateActionRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=BatchStopUpdateAction");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetBatchStopUpdateActionResponse res = new openapisdk.models.operations.GetBatchStopUpdateActionResponse() {{
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCompleteMigration - Complete the migration of data.
    **/
    public openapisdk.models.operations.GetCompleteMigrationResponse getCompleteMigration(openapisdk.models.operations.GetCompleteMigrationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=CompleteMigration");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetCompleteMigrationResponse res = new openapisdk.models.operations.GetCompleteMigrationResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCreateGlobalReplicationGroup - <p>Global Datastore for Redis offers fully managed, fast, reliable and secure cross-region replication. Using Global Datastore for Redis, you can create cross-region read replica clusters for ElastiCache for Redis to enable low-latency reads and disaster recovery across regions. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Redis-Global-Datastore.html">Replication Across Regions Using Global Datastore</a>. </p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> is the name of the Global datastore.</p> </li> <li> <p>The <b>PrimaryReplicationGroupId</b> represents the name of the primary cluster that accepts writes and will replicate updates to the secondary cluster.</p> </li> </ul>
    **/
    public openapisdk.models.operations.GetCreateGlobalReplicationGroupResponse getCreateGlobalReplicationGroup(openapisdk.models.operations.GetCreateGlobalReplicationGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=CreateGlobalReplicationGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetCreateGlobalReplicationGroupResponse res = new openapisdk.models.operations.GetCreateGlobalReplicationGroupResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDeleteCacheCluster - <p>Deletes a previously provisioned cluster. <code>DeleteCacheCluster</code> deletes all associated cache nodes, node endpoints and the cluster itself. When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the cluster; you cannot cancel or revert this operation.</p> <p>This operation is not valid for:</p> <ul> <li> <p>Redis (cluster mode enabled) clusters</p> </li> <li> <p>Redis (cluster mode disabled) clusters</p> </li> <li> <p>A cluster that is the last read replica of a replication group</p> </li> <li> <p>A cluster that is the primary node of a replication group</p> </li> <li> <p>A node group (shard) that has Multi-AZ mode enabled</p> </li> <li> <p>A cluster from a Redis (cluster mode enabled) replication group</p> </li> <li> <p>A cluster that is not in the <code>available</code> state</p> </li> </ul>
    **/
    public openapisdk.models.operations.GetDeleteCacheClusterResponse getDeleteCacheCluster(openapisdk.models.operations.GetDeleteCacheClusterRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DeleteCacheCluster");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDeleteCacheClusterResponse res = new openapisdk.models.operations.GetDeleteCacheClusterResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 485) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 486) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDeleteCacheParameterGroup - Deletes the specified cache parameter group. You cannot delete a cache parameter group if it is associated with any cache clusters. You cannot delete the default cache parameter groups in your account.
    **/
    public openapisdk.models.operations.GetDeleteCacheParameterGroupResponse getDeleteCacheParameterGroup(openapisdk.models.operations.GetDeleteCacheParameterGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DeleteCacheParameterGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDeleteCacheParameterGroupResponse res = new openapisdk.models.operations.GetDeleteCacheParameterGroupResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDeleteCacheSecurityGroup - <p>Deletes a cache security group.</p> <note> <p>You cannot delete a cache security group if it is associated with any clusters.</p> </note>
    **/
    public openapisdk.models.operations.GetDeleteCacheSecurityGroupResponse getDeleteCacheSecurityGroup(openapisdk.models.operations.GetDeleteCacheSecurityGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DeleteCacheSecurityGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDeleteCacheSecurityGroupResponse res = new openapisdk.models.operations.GetDeleteCacheSecurityGroupResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDeleteCacheSubnetGroup - <p>Deletes a cache subnet group.</p> <note> <p>You cannot delete a default cache subnet group or one that is associated with any clusters.</p> </note>
    **/
    public openapisdk.models.operations.GetDeleteCacheSubnetGroupResponse getDeleteCacheSubnetGroup(openapisdk.models.operations.GetDeleteCacheSubnetGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DeleteCacheSubnetGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDeleteCacheSubnetGroupResponse res = new openapisdk.models.operations.GetDeleteCacheSubnetGroupResponse() {{
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDeleteGlobalReplicationGroup - <p>Deleting a Global datastore is a two-step process: </p> <ul> <li> <p>First, you must <a>DisassociateGlobalReplicationGroup</a> to remove the secondary clusters in the Global datastore.</p> </li> <li> <p>Once the Global datastore contains only the primary cluster, you can use the <code>DeleteGlobalReplicationGroup</code> API to delete the Global datastore while retainining the primary cluster using <code>RetainPrimaryReplicationGroup=true</code>.</p> </li> </ul> <p>Since the Global Datastore has only a primary cluster, you can delete the Global Datastore while retaining the primary by setting <code>RetainPrimaryReplicationGroup=true</code>. The primary cluster is never deleted when deleting a Global Datastore. It can only be deleted when it no longer is associated with any Global Datastore.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p>
    **/
    public openapisdk.models.operations.GetDeleteGlobalReplicationGroupResponse getDeleteGlobalReplicationGroup(openapisdk.models.operations.GetDeleteGlobalReplicationGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DeleteGlobalReplicationGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDeleteGlobalReplicationGroupResponse res = new openapisdk.models.operations.GetDeleteGlobalReplicationGroupResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDeleteReplicationGroup - <p>Deletes an existing replication group. By default, this operation deletes the entire replication group, including the primary/primaries and all of the read replicas. If the replication group has only one primary, you can optionally delete only the read replicas, while retaining the primary by setting <code>RetainPrimaryCluster=true</code>.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>
    **/
    public openapisdk.models.operations.GetDeleteReplicationGroupResponse getDeleteReplicationGroup(openapisdk.models.operations.GetDeleteReplicationGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DeleteReplicationGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDeleteReplicationGroupResponse res = new openapisdk.models.operations.GetDeleteReplicationGroupResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 485) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 486) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDeleteSnapshot - <p>Deletes an existing snapshot. When you receive a successful response from this operation, ElastiCache immediately begins deleting the snapshot; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>
    **/
    public openapisdk.models.operations.GetDeleteSnapshotResponse getDeleteSnapshot(openapisdk.models.operations.GetDeleteSnapshotRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DeleteSnapshot");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDeleteSnapshotResponse res = new openapisdk.models.operations.GetDeleteSnapshotResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDeleteUser - For Redis engine version 6.x onwards: Deletes a user. The user will be removed from all user groups and in turn removed from all replication groups. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. 
    **/
    public openapisdk.models.operations.GetDeleteUserResponse getDeleteUser(openapisdk.models.operations.GetDeleteUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DeleteUser");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDeleteUserResponse res = new openapisdk.models.operations.GetDeleteUserResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDeleteUserGroup - For Redis engine version 6.x onwards: Deletes a user group. The user group must first be disassociated from the replication group before it can be deleted. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. 
    **/
    public openapisdk.models.operations.GetDeleteUserGroupResponse getDeleteUserGroup(openapisdk.models.operations.GetDeleteUserGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DeleteUserGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDeleteUserGroupResponse res = new openapisdk.models.operations.GetDeleteUserGroupResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDescribeCacheClusters - <p>Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cache cluster if a cluster identifier is supplied.</p> <p>By default, abbreviated information about the clusters is returned. You can use the optional <i>ShowCacheNodeInfo</i> flag to retrieve detailed information about the cache nodes associated with the clusters. These details include the DNS address and port for the cache node endpoint.</p> <p>If the cluster is in the <i>creating</i> state, only cluster-level information is displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the <i>deleting</i> state, only cluster-level information is displayed.</p> <p>If cache nodes are currently being added to the cluster, node endpoint information and creation time for the additional nodes are not displayed until they are completely provisioned. When the cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If cache nodes are currently being removed from the cluster, no endpoint information for the removed nodes is displayed.</p>
    **/
    public openapisdk.models.operations.GetDescribeCacheClustersResponse getDescribeCacheClusters(openapisdk.models.operations.GetDescribeCacheClustersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DescribeCacheClusters");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDescribeCacheClustersResponse res = new openapisdk.models.operations.GetDescribeCacheClustersResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDescribeCacheEngineVersions - Returns a list of the available cache engines and their versions.
    **/
    public openapisdk.models.operations.GetDescribeCacheEngineVersionsResponse getDescribeCacheEngineVersions(openapisdk.models.operations.GetDescribeCacheEngineVersionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DescribeCacheEngineVersions");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDescribeCacheEngineVersionsResponse res = new openapisdk.models.operations.GetDescribeCacheEngineVersionsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDescribeCacheParameterGroups - Returns a list of cache parameter group descriptions. If a cache parameter group name is specified, the list contains only the descriptions for that group.
    **/
    public openapisdk.models.operations.GetDescribeCacheParameterGroupsResponse getDescribeCacheParameterGroups(openapisdk.models.operations.GetDescribeCacheParameterGroupsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DescribeCacheParameterGroups");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDescribeCacheParameterGroupsResponse res = new openapisdk.models.operations.GetDescribeCacheParameterGroupsResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDescribeCacheParameters - Returns the detailed parameter list for a particular cache parameter group.
    **/
    public openapisdk.models.operations.GetDescribeCacheParametersResponse getDescribeCacheParameters(openapisdk.models.operations.GetDescribeCacheParametersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DescribeCacheParameters");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDescribeCacheParametersResponse res = new openapisdk.models.operations.GetDescribeCacheParametersResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDescribeCacheSecurityGroups - Returns a list of cache security group descriptions. If a cache security group name is specified, the list contains only the description of that group. This applicable only when you have ElastiCache in Classic setup 
    **/
    public openapisdk.models.operations.GetDescribeCacheSecurityGroupsResponse getDescribeCacheSecurityGroups(openapisdk.models.operations.GetDescribeCacheSecurityGroupsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DescribeCacheSecurityGroups");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDescribeCacheSecurityGroupsResponse res = new openapisdk.models.operations.GetDescribeCacheSecurityGroupsResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDescribeCacheSubnetGroups - Returns a list of cache subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group. This is applicable only when you have ElastiCache in VPC setup. All ElastiCache clusters now launch in VPC by default. 
    **/
    public openapisdk.models.operations.GetDescribeCacheSubnetGroupsResponse getDescribeCacheSubnetGroups(openapisdk.models.operations.GetDescribeCacheSubnetGroupsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DescribeCacheSubnetGroups");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDescribeCacheSubnetGroupsResponse res = new openapisdk.models.operations.GetDescribeCacheSubnetGroupsResponse() {{
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDescribeEngineDefaultParameters - Returns the default engine and system parameter information for the specified cache engine.
    **/
    public openapisdk.models.operations.GetDescribeEngineDefaultParametersResponse getDescribeEngineDefaultParameters(openapisdk.models.operations.GetDescribeEngineDefaultParametersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DescribeEngineDefaultParameters");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDescribeEngineDefaultParametersResponse res = new openapisdk.models.operations.GetDescribeEngineDefaultParametersResponse() {{
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDescribeEvents - <p>Returns events related to clusters, cache security groups, and cache parameter groups. You can obtain events specific to a particular cluster, cache security group, or cache parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>
    **/
    public openapisdk.models.operations.GetDescribeEventsResponse getDescribeEvents(openapisdk.models.operations.GetDescribeEventsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DescribeEvents");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDescribeEventsResponse res = new openapisdk.models.operations.GetDescribeEventsResponse() {{
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDescribeGlobalReplicationGroups - Returns information about a particular global replication group. If no identifier is specified, returns information about all Global datastores. 
    **/
    public openapisdk.models.operations.GetDescribeGlobalReplicationGroupsResponse getDescribeGlobalReplicationGroups(openapisdk.models.operations.GetDescribeGlobalReplicationGroupsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DescribeGlobalReplicationGroups");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDescribeGlobalReplicationGroupsResponse res = new openapisdk.models.operations.GetDescribeGlobalReplicationGroupsResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDescribeReplicationGroups - <p>Returns information about a particular replication group. If no identifier is specified, <code>DescribeReplicationGroups</code> returns information about all replication groups.</p> <note> <p>This operation is valid for Redis only.</p> </note>
    **/
    public openapisdk.models.operations.GetDescribeReplicationGroupsResponse getDescribeReplicationGroups(openapisdk.models.operations.GetDescribeReplicationGroupsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DescribeReplicationGroups");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDescribeReplicationGroupsResponse res = new openapisdk.models.operations.GetDescribeReplicationGroupsResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDescribeReservedCacheNodes - Returns information about reserved cache nodes for this account, or about a specified reserved cache node.
    **/
    public openapisdk.models.operations.GetDescribeReservedCacheNodesResponse getDescribeReservedCacheNodes(openapisdk.models.operations.GetDescribeReservedCacheNodesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DescribeReservedCacheNodes");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDescribeReservedCacheNodesResponse res = new openapisdk.models.operations.GetDescribeReservedCacheNodesResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDescribeReservedCacheNodesOfferings - Lists available reserved cache node offerings.
    **/
    public openapisdk.models.operations.GetDescribeReservedCacheNodesOfferingsResponse getDescribeReservedCacheNodesOfferings(openapisdk.models.operations.GetDescribeReservedCacheNodesOfferingsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DescribeReservedCacheNodesOfferings");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDescribeReservedCacheNodesOfferingsResponse res = new openapisdk.models.operations.GetDescribeReservedCacheNodesOfferingsResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDescribeServiceUpdates - Returns details of the service updates
    **/
    public openapisdk.models.operations.GetDescribeServiceUpdatesResponse getDescribeServiceUpdates(openapisdk.models.operations.GetDescribeServiceUpdatesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DescribeServiceUpdates");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDescribeServiceUpdatesResponse res = new openapisdk.models.operations.GetDescribeServiceUpdatesResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDescribeSnapshots - <p>Returns information about cluster or replication group snapshots. By default, <code>DescribeSnapshots</code> lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cache cluster.</p> <note> <p>This operation is valid for Redis only.</p> </note>
    **/
    public openapisdk.models.operations.GetDescribeSnapshotsResponse getDescribeSnapshots(openapisdk.models.operations.GetDescribeSnapshotsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DescribeSnapshots");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDescribeSnapshotsResponse res = new openapisdk.models.operations.GetDescribeSnapshotsResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDescribeUpdateActions - Returns details of the update actions 
    **/
    public openapisdk.models.operations.GetDescribeUpdateActionsResponse getDescribeUpdateActions(openapisdk.models.operations.GetDescribeUpdateActionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DescribeUpdateActions");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDescribeUpdateActionsResponse res = new openapisdk.models.operations.GetDescribeUpdateActionsResponse() {{
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDescribeUserGroups - Returns a list of user groups.
    **/
    public openapisdk.models.operations.GetDescribeUserGroupsResponse getDescribeUserGroups(openapisdk.models.operations.GetDescribeUserGroupsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DescribeUserGroups");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDescribeUserGroupsResponse res = new openapisdk.models.operations.GetDescribeUserGroupsResponse() {{
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDisassociateGlobalReplicationGroup - Remove a secondary cluster from the Global datastore using the Global datastore name. The secondary cluster will no longer receive updates from the primary cluster, but will remain as a standalone cluster in that Amazon region.
    **/
    public openapisdk.models.operations.GetDisassociateGlobalReplicationGroupResponse getDisassociateGlobalReplicationGroup(openapisdk.models.operations.GetDisassociateGlobalReplicationGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DisassociateGlobalReplicationGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDisassociateGlobalReplicationGroupResponse res = new openapisdk.models.operations.GetDisassociateGlobalReplicationGroupResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getFailoverGlobalReplicationGroup - Used to failover the primary region to a selected secondary region. The selected secondary region will become primary, and all other clusters will become secondary.
    **/
    public openapisdk.models.operations.GetFailoverGlobalReplicationGroupResponse getFailoverGlobalReplicationGroup(openapisdk.models.operations.GetFailoverGlobalReplicationGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=FailoverGlobalReplicationGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetFailoverGlobalReplicationGroupResponse res = new openapisdk.models.operations.GetFailoverGlobalReplicationGroupResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getListAllowedNodeTypeModifications - <p>Lists all available node types that you can scale your Redis cluster's or replication group's current node type.</p> <p>When you use the <code>ModifyCacheCluster</code> or <code>ModifyReplicationGroup</code> operations to scale your cluster or replication group, the value of the <code>CacheNodeType</code> parameter must be one of the node types returned by this operation.</p>
    **/
    public openapisdk.models.operations.GetListAllowedNodeTypeModificationsResponse getListAllowedNodeTypeModifications(openapisdk.models.operations.GetListAllowedNodeTypeModificationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=ListAllowedNodeTypeModifications");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetListAllowedNodeTypeModificationsResponse res = new openapisdk.models.operations.GetListAllowedNodeTypeModificationsResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getListTagsForResource - <p>Lists all tags currently on a named resource.</p> <p> A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p> <p>If the cluster is not in the <i>available</i> state, <code>ListTagsForResource</code> returns an error.</p>
    **/
    public openapisdk.models.operations.GetListTagsForResourceResponse getListTagsForResource(openapisdk.models.operations.GetListTagsForResourceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=ListTagsForResource");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetListTagsForResourceResponse res = new openapisdk.models.operations.GetListTagsForResourceResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 485) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 486) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 487) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 488) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 489) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 490) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getModifyGlobalReplicationGroup - Modifies the settings for a Global datastore.
    **/
    public openapisdk.models.operations.GetModifyGlobalReplicationGroupResponse getModifyGlobalReplicationGroup(openapisdk.models.operations.GetModifyGlobalReplicationGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=ModifyGlobalReplicationGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetModifyGlobalReplicationGroupResponse res = new openapisdk.models.operations.GetModifyGlobalReplicationGroupResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getModifyUser - Changes user password(s) and/or access string.
    **/
    public openapisdk.models.operations.GetModifyUserResponse getModifyUser(openapisdk.models.operations.GetModifyUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=ModifyUser");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetModifyUserResponse res = new openapisdk.models.operations.GetModifyUserResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getModifyUserGroup - Changes the list of users that belong to the user group.
    **/
    public openapisdk.models.operations.GetModifyUserGroupResponse getModifyUserGroup(openapisdk.models.operations.GetModifyUserGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=ModifyUserGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetModifyUserGroupResponse res = new openapisdk.models.operations.GetModifyUserGroupResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 485) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 486) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRebalanceSlotsInGlobalReplicationGroup - Redistribute slots to ensure uniform distribution across existing shards in the cluster.
    **/
    public openapisdk.models.operations.GetRebalanceSlotsInGlobalReplicationGroupResponse getRebalanceSlotsInGlobalReplicationGroup(openapisdk.models.operations.GetRebalanceSlotsInGlobalReplicationGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=RebalanceSlotsInGlobalReplicationGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRebalanceSlotsInGlobalReplicationGroupResponse res = new openapisdk.models.operations.GetRebalanceSlotsInGlobalReplicationGroupResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRemoveTagsFromResource - Removes the tags identified by the <code>TagKeys</code> list from the named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.
    **/
    public openapisdk.models.operations.GetRemoveTagsFromResourceResponse getRemoveTagsFromResource(openapisdk.models.operations.GetRemoveTagsFromResourceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=RemoveTagsFromResource");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRemoveTagsFromResourceResponse res = new openapisdk.models.operations.GetRemoveTagsFromResourceResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 485) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 486) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 487) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 488) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 489) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 490) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 491) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRevokeCacheSecurityGroupIngress - Revokes ingress from a cache security group. Use this operation to disallow access from an Amazon EC2 security group that had been previously authorized.
    **/
    public openapisdk.models.operations.GetRevokeCacheSecurityGroupIngressResponse getRevokeCacheSecurityGroupIngress(openapisdk.models.operations.GetRevokeCacheSecurityGroupIngressRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=RevokeCacheSecurityGroupIngress");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRevokeCacheSecurityGroupIngressResponse res = new openapisdk.models.operations.GetRevokeCacheSecurityGroupIngressResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTestFailover - <p>Represents the input of a <code>TestFailover</code> operation which test automatic failover on a specified node group (called shard in the console) in a replication group (called cluster in the console).</p> <p class="title"> <b>Note the following</b> </p> <ul> <li> <p>A customer can use this operation to test automatic failover on up to 5 shards (called node groups in the ElastiCache API and Amazon CLI) in any rolling 24-hour period.</p> </li> <li> <p>If calling this operation on shards in different clusters (called replication groups in the API and CLI), the calls can be made concurrently.</p> <p> </p> </li> <li> <p>If calling this operation multiple times on different shards in the same Redis (cluster mode enabled) replication group, the first node replacement must complete before a subsequent call can be made.</p> </li> <li> <p>To determine whether the node replacement is complete you can check Events using the Amazon ElastiCache console, the Amazon CLI, or the ElastiCache API. Look for the following automatic failover related events, listed here in order of occurrance:</p> <ol> <li> <p>Replication group message: <code>Test Failover API called for node group &lt;node-group-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Replication group message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Cache cluster message: <code>Recovering cache nodes &lt;node-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Finished recovery for cache nodes &lt;node-id&gt;</code> </p> </li> </ol> <p>For more information see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ECEvents.Viewing.html">Viewing ElastiCache Events</a> in the <i>ElastiCache User Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> in the ElastiCache API Reference</p> </li> </ul> </li> </ul> <p>Also see, <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html#auto-failover-test">Testing Multi-AZ </a> in the <i>ElastiCache User Guide</i>.</p>
    **/
    public openapisdk.models.operations.GetTestFailoverResponse getTestFailover(openapisdk.models.operations.GetTestFailoverRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=TestFailover");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTestFailoverResponse res = new openapisdk.models.operations.GetTestFailoverResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 485) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 486) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 487) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 488) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postAddTagsToResource - <p>A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p> <p> For example, you can use cost-allocation tags to your ElastiCache resources, Amazon generates a cost allocation report as a comma-separated value (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories (such as cost centers, application names, or owners) to organize your costs across multiple services.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Tagging.html">Using Cost Allocation Tags in Amazon ElastiCache</a> in the <i>ElastiCache User Guide</i>.</p>
    **/
    public openapisdk.models.operations.PostAddTagsToResourceResponse postAddTagsToResource(openapisdk.models.operations.PostAddTagsToResourceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=AddTagsToResource");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostAddTagsToResourceResponse res = new openapisdk.models.operations.PostAddTagsToResourceResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 485) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 486) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 487) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 488) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 489) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 490) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 491) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postAuthorizeCacheSecurityGroupIngress - <p>Allows network ingress to a cache security group. Applications using ElastiCache must be running on Amazon EC2, and Amazon EC2 security groups are used as the authorization mechanism.</p> <note> <p>You cannot authorize ingress from an Amazon EC2 security group in one region to an ElastiCache cluster in another region.</p> </note>
    **/
    public openapisdk.models.operations.PostAuthorizeCacheSecurityGroupIngressResponse postAuthorizeCacheSecurityGroupIngress(openapisdk.models.operations.PostAuthorizeCacheSecurityGroupIngressRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=AuthorizeCacheSecurityGroupIngress");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostAuthorizeCacheSecurityGroupIngressResponse res = new openapisdk.models.operations.PostAuthorizeCacheSecurityGroupIngressResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postBatchApplyUpdateAction - Apply the service update. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/applying-updates.html">Applying Service Updates</a>.
    **/
    public openapisdk.models.operations.PostBatchApplyUpdateActionResponse postBatchApplyUpdateAction(openapisdk.models.operations.PostBatchApplyUpdateActionRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=BatchApplyUpdateAction");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostBatchApplyUpdateActionResponse res = new openapisdk.models.operations.PostBatchApplyUpdateActionResponse() {{
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postBatchStopUpdateAction - Stop the service update. For more information on service updates and stopping them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/stopping-self-service-updates.html">Stopping Service Updates</a>.
    **/
    public openapisdk.models.operations.PostBatchStopUpdateActionResponse postBatchStopUpdateAction(openapisdk.models.operations.PostBatchStopUpdateActionRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=BatchStopUpdateAction");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostBatchStopUpdateActionResponse res = new openapisdk.models.operations.PostBatchStopUpdateActionResponse() {{
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postCompleteMigration - Complete the migration of data.
    **/
    public openapisdk.models.operations.PostCompleteMigrationResponse postCompleteMigration(openapisdk.models.operations.PostCompleteMigrationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=CompleteMigration");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostCompleteMigrationResponse res = new openapisdk.models.operations.PostCompleteMigrationResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postCopySnapshot - <p>Makes a copy of an existing snapshot.</p> <note> <p>This operation is valid for Redis only.</p> </note> <important> <p>Users or groups that have permissions to use the <code>CopySnapshot</code> operation can create their own Amazon S3 buckets and copy snapshots to it. To control access to your snapshots, use an IAM policy to control who has the ability to use the <code>CopySnapshot</code> operation. For more information about using IAM to control the use of ElastiCache operations, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html">Exporting Snapshots</a> and <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.html">Authentication &amp; Access Control</a>.</p> </important> <p>You could receive the following error messages.</p> <p class="title"> <b>Error Messages</b> </p> <ul> <li> <p> <b>Error Message:</b> The S3 bucket %s is outside of the region.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s does not exist.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s is not owned by the authenticated user.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The authenticated user does not have sufficient permissions to perform the desired activity.</p> <p> <b>Solution:</b> Contact your system administrator to get the needed permissions.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s already contains an object with key %s.</p> <p> <b>Solution:</b> Give the <code>TargetSnapshotName</code> a new and unique value. If exporting a snapshot, you could alternatively create a new Amazon S3 bucket and use this same value for <code>TargetSnapshotName</code>.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted READ permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add List and Read permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted WRITE permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add Upload/Delete permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted READ_ACP permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add View Permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> </ul>
    **/
    public openapisdk.models.operations.PostCopySnapshotResponse postCopySnapshot(openapisdk.models.operations.PostCopySnapshotRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=CopySnapshot");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostCopySnapshotResponse res = new openapisdk.models.operations.PostCopySnapshotResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 485) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 486) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postCreateCacheCluster - <p>Creates a cluster. All nodes in the cluster run the same protocol-compliant cache engine software, either Memcached or Redis.</p> <p>This operation is not supported for Redis (cluster mode enabled) clusters.</p>
    **/
    public openapisdk.models.operations.PostCreateCacheClusterResponse postCreateCacheCluster(openapisdk.models.operations.PostCreateCacheClusterRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=CreateCacheCluster");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostCreateCacheClusterResponse res = new openapisdk.models.operations.PostCreateCacheClusterResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 485) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 486) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 487) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 488) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 489) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 490) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 491) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 492) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 493) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postCreateCacheParameterGroup - <p>Creates a new Amazon ElastiCache cache parameter group. An ElastiCache cache parameter group is a collection of parameters and their values that are applied to all of the nodes in any cluster or replication group using the CacheParameterGroup.</p> <p>A newly created CacheParameterGroup is an exact duplicate of the default parameter group for the CacheParameterGroupFamily. To customize the newly created CacheParameterGroup you can change the values of specific parameters. For more information, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheParameterGroup.html">ModifyCacheParameterGroup</a> in the ElastiCache API Reference.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ParameterGroups.html">Parameters and Parameter Groups</a> in the ElastiCache User Guide.</p> </li> </ul>
    **/
    public openapisdk.models.operations.PostCreateCacheParameterGroupResponse postCreateCacheParameterGroup(openapisdk.models.operations.PostCreateCacheParameterGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=CreateCacheParameterGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostCreateCacheParameterGroupResponse res = new openapisdk.models.operations.PostCreateCacheParameterGroupResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 485) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postCreateCacheSecurityGroup - <p>Creates a new cache security group. Use a cache security group to control access to one or more clusters.</p> <p>Cache security groups are only used when you are creating a cluster outside of an Amazon Virtual Private Cloud (Amazon VPC). If you are creating a cluster inside of a VPC, use a cache subnet group instead. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSubnetGroup.html">CreateCacheSubnetGroup</a>.</p>
    **/
    public openapisdk.models.operations.PostCreateCacheSecurityGroupResponse postCreateCacheSecurityGroup(openapisdk.models.operations.PostCreateCacheSecurityGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=CreateCacheSecurityGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostCreateCacheSecurityGroupResponse res = new openapisdk.models.operations.PostCreateCacheSecurityGroupResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postCreateCacheSubnetGroup - <p>Creates a new cache subnet group.</p> <p>Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).</p>
    **/
    public openapisdk.models.operations.PostCreateCacheSubnetGroupResponse postCreateCacheSubnetGroup(openapisdk.models.operations.PostCreateCacheSubnetGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=CreateCacheSubnetGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostCreateCacheSubnetGroupResponse res = new openapisdk.models.operations.PostCreateCacheSubnetGroupResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 485) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postCreateGlobalReplicationGroup - <p>Global Datastore for Redis offers fully managed, fast, reliable and secure cross-region replication. Using Global Datastore for Redis, you can create cross-region read replica clusters for ElastiCache for Redis to enable low-latency reads and disaster recovery across regions. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Redis-Global-Datastore.html">Replication Across Regions Using Global Datastore</a>. </p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> is the name of the Global datastore.</p> </li> <li> <p>The <b>PrimaryReplicationGroupId</b> represents the name of the primary cluster that accepts writes and will replicate updates to the secondary cluster.</p> </li> </ul>
    **/
    public openapisdk.models.operations.PostCreateGlobalReplicationGroupResponse postCreateGlobalReplicationGroup(openapisdk.models.operations.PostCreateGlobalReplicationGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=CreateGlobalReplicationGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostCreateGlobalReplicationGroupResponse res = new openapisdk.models.operations.PostCreateGlobalReplicationGroupResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postCreateReplicationGroup - <p>Creates a Redis (cluster mode disabled) or a Redis (cluster mode enabled) replication group.</p> <p>This API can be used to create a standalone regional replication group or a secondary replication group associated with a Global datastore.</p> <p>A Redis (cluster mode disabled) replication group is a collection of clusters, where one of the clusters is a read/write primary and the others are read-only replicas. Writes to the primary are asynchronously propagated to the replicas.</p> <p>A Redis cluster-mode enabled cluster is comprised of from 1 to 90 shards (API/CLI: node groups). Each shard has a primary node and up to 5 read-only replica nodes. The configuration can range from 90 shards and 0 replicas to 15 shards and 5 replicas, which is the maximum number or replicas allowed. </p> <p>The node or shard limit can be increased to a maximum of 500 per cluster if the Redis engine version is 5.0.6 or higher. For example, you can choose to configure a 500 node cluster that ranges between 83 shards (one primary and 5 replicas per shard) and 500 shards (single primary and no replicas). Make sure there are enough available IP addresses to accommodate the increase. Common pitfalls include the subnets in the subnet group have too small a CIDR range or the subnets are shared and heavily used by other clusters. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SubnetGroups.Creating.html">Creating a Subnet Group</a>. For versions below 5.0.6, the limit is 250 per cluster.</p> <p>To request a limit increase, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">Amazon Service Limits</a> and choose the limit type <b>Nodes per cluster per instance type</b>. </p> <p>When a Redis (cluster mode disabled) replication group has been successfully created, you can add one or more read replicas to it, up to a total of 5 read replicas. If you need to increase or decrease the number of node groups (console: shards), you can avail yourself of ElastiCache for Redis' scaling. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Scaling.html">Scaling ElastiCache for Redis Clusters</a> in the <i>ElastiCache User Guide</i>.</p> <note> <p>This operation is valid for Redis only.</p> </note>
    **/
    public openapisdk.models.operations.PostCreateReplicationGroupResponse postCreateReplicationGroup(openapisdk.models.operations.PostCreateReplicationGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=CreateReplicationGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostCreateReplicationGroupResponse res = new openapisdk.models.operations.PostCreateReplicationGroupResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 485) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 486) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 487) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 488) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 489) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 490) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 491) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 492) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 493) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 494) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 495) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 496) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 497) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 498) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postCreateSnapshot - <p>Creates a copy of an entire cluster or replication group at a specific moment in time.</p> <note> <p>This operation is valid for Redis only.</p> </note>
    **/
    public openapisdk.models.operations.PostCreateSnapshotResponse postCreateSnapshot(openapisdk.models.operations.PostCreateSnapshotRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=CreateSnapshot");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostCreateSnapshotResponse res = new openapisdk.models.operations.PostCreateSnapshotResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 485) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 486) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 487) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 488) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 489) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postCreateUser - For Redis engine version 6.x onwards: Creates a Redis user. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>.
    **/
    public openapisdk.models.operations.PostCreateUserResponse postCreateUser(openapisdk.models.operations.PostCreateUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=CreateUser");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostCreateUserResponse res = new openapisdk.models.operations.PostCreateUserResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 485) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postCreateUserGroup - For Redis engine version 6.x onwards: Creates a Redis user group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a> 
    **/
    public openapisdk.models.operations.PostCreateUserGroupResponse postCreateUserGroup(openapisdk.models.operations.PostCreateUserGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=CreateUserGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostCreateUserGroupResponse res = new openapisdk.models.operations.PostCreateUserGroupResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 485) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 486) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postDecreaseNodeGroupsInGlobalReplicationGroup - Decreases the number of node groups in a Global datastore
    **/
    public openapisdk.models.operations.PostDecreaseNodeGroupsInGlobalReplicationGroupResponse postDecreaseNodeGroupsInGlobalReplicationGroup(openapisdk.models.operations.PostDecreaseNodeGroupsInGlobalReplicationGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DecreaseNodeGroupsInGlobalReplicationGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostDecreaseNodeGroupsInGlobalReplicationGroupResponse res = new openapisdk.models.operations.PostDecreaseNodeGroupsInGlobalReplicationGroupResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postDecreaseReplicaCount - Dynamically decreases the number of replicas in a Redis (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation is performed with no cluster down time.
    **/
    public openapisdk.models.operations.PostDecreaseReplicaCountResponse postDecreaseReplicaCount(openapisdk.models.operations.PostDecreaseReplicaCountRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DecreaseReplicaCount");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostDecreaseReplicaCountResponse res = new openapisdk.models.operations.PostDecreaseReplicaCountResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 485) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 486) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 487) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 488) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 489) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 490) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 491) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postDeleteCacheCluster - <p>Deletes a previously provisioned cluster. <code>DeleteCacheCluster</code> deletes all associated cache nodes, node endpoints and the cluster itself. When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the cluster; you cannot cancel or revert this operation.</p> <p>This operation is not valid for:</p> <ul> <li> <p>Redis (cluster mode enabled) clusters</p> </li> <li> <p>Redis (cluster mode disabled) clusters</p> </li> <li> <p>A cluster that is the last read replica of a replication group</p> </li> <li> <p>A cluster that is the primary node of a replication group</p> </li> <li> <p>A node group (shard) that has Multi-AZ mode enabled</p> </li> <li> <p>A cluster from a Redis (cluster mode enabled) replication group</p> </li> <li> <p>A cluster that is not in the <code>available</code> state</p> </li> </ul>
    **/
    public openapisdk.models.operations.PostDeleteCacheClusterResponse postDeleteCacheCluster(openapisdk.models.operations.PostDeleteCacheClusterRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DeleteCacheCluster");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostDeleteCacheClusterResponse res = new openapisdk.models.operations.PostDeleteCacheClusterResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 485) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 486) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postDeleteCacheParameterGroup - Deletes the specified cache parameter group. You cannot delete a cache parameter group if it is associated with any cache clusters. You cannot delete the default cache parameter groups in your account.
    **/
    public openapisdk.models.operations.PostDeleteCacheParameterGroupResponse postDeleteCacheParameterGroup(openapisdk.models.operations.PostDeleteCacheParameterGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DeleteCacheParameterGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostDeleteCacheParameterGroupResponse res = new openapisdk.models.operations.PostDeleteCacheParameterGroupResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postDeleteCacheSecurityGroup - <p>Deletes a cache security group.</p> <note> <p>You cannot delete a cache security group if it is associated with any clusters.</p> </note>
    **/
    public openapisdk.models.operations.PostDeleteCacheSecurityGroupResponse postDeleteCacheSecurityGroup(openapisdk.models.operations.PostDeleteCacheSecurityGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DeleteCacheSecurityGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostDeleteCacheSecurityGroupResponse res = new openapisdk.models.operations.PostDeleteCacheSecurityGroupResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postDeleteCacheSubnetGroup - <p>Deletes a cache subnet group.</p> <note> <p>You cannot delete a default cache subnet group or one that is associated with any clusters.</p> </note>
    **/
    public openapisdk.models.operations.PostDeleteCacheSubnetGroupResponse postDeleteCacheSubnetGroup(openapisdk.models.operations.PostDeleteCacheSubnetGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DeleteCacheSubnetGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostDeleteCacheSubnetGroupResponse res = new openapisdk.models.operations.PostDeleteCacheSubnetGroupResponse() {{
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postDeleteGlobalReplicationGroup - <p>Deleting a Global datastore is a two-step process: </p> <ul> <li> <p>First, you must <a>DisassociateGlobalReplicationGroup</a> to remove the secondary clusters in the Global datastore.</p> </li> <li> <p>Once the Global datastore contains only the primary cluster, you can use the <code>DeleteGlobalReplicationGroup</code> API to delete the Global datastore while retainining the primary cluster using <code>RetainPrimaryReplicationGroup=true</code>.</p> </li> </ul> <p>Since the Global Datastore has only a primary cluster, you can delete the Global Datastore while retaining the primary by setting <code>RetainPrimaryReplicationGroup=true</code>. The primary cluster is never deleted when deleting a Global Datastore. It can only be deleted when it no longer is associated with any Global Datastore.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p>
    **/
    public openapisdk.models.operations.PostDeleteGlobalReplicationGroupResponse postDeleteGlobalReplicationGroup(openapisdk.models.operations.PostDeleteGlobalReplicationGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DeleteGlobalReplicationGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostDeleteGlobalReplicationGroupResponse res = new openapisdk.models.operations.PostDeleteGlobalReplicationGroupResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postDeleteReplicationGroup - <p>Deletes an existing replication group. By default, this operation deletes the entire replication group, including the primary/primaries and all of the read replicas. If the replication group has only one primary, you can optionally delete only the read replicas, while retaining the primary by setting <code>RetainPrimaryCluster=true</code>.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>
    **/
    public openapisdk.models.operations.PostDeleteReplicationGroupResponse postDeleteReplicationGroup(openapisdk.models.operations.PostDeleteReplicationGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DeleteReplicationGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostDeleteReplicationGroupResponse res = new openapisdk.models.operations.PostDeleteReplicationGroupResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 485) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 486) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postDeleteSnapshot - <p>Deletes an existing snapshot. When you receive a successful response from this operation, ElastiCache immediately begins deleting the snapshot; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>
    **/
    public openapisdk.models.operations.PostDeleteSnapshotResponse postDeleteSnapshot(openapisdk.models.operations.PostDeleteSnapshotRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DeleteSnapshot");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostDeleteSnapshotResponse res = new openapisdk.models.operations.PostDeleteSnapshotResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postDeleteUser - For Redis engine version 6.x onwards: Deletes a user. The user will be removed from all user groups and in turn removed from all replication groups. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. 
    **/
    public openapisdk.models.operations.PostDeleteUserResponse postDeleteUser(openapisdk.models.operations.PostDeleteUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DeleteUser");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostDeleteUserResponse res = new openapisdk.models.operations.PostDeleteUserResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postDeleteUserGroup - For Redis engine version 6.x onwards: Deletes a user group. The user group must first be disassociated from the replication group before it can be deleted. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. 
    **/
    public openapisdk.models.operations.PostDeleteUserGroupResponse postDeleteUserGroup(openapisdk.models.operations.PostDeleteUserGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DeleteUserGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostDeleteUserGroupResponse res = new openapisdk.models.operations.PostDeleteUserGroupResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postDescribeCacheClusters - <p>Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cache cluster if a cluster identifier is supplied.</p> <p>By default, abbreviated information about the clusters is returned. You can use the optional <i>ShowCacheNodeInfo</i> flag to retrieve detailed information about the cache nodes associated with the clusters. These details include the DNS address and port for the cache node endpoint.</p> <p>If the cluster is in the <i>creating</i> state, only cluster-level information is displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the <i>deleting</i> state, only cluster-level information is displayed.</p> <p>If cache nodes are currently being added to the cluster, node endpoint information and creation time for the additional nodes are not displayed until they are completely provisioned. When the cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If cache nodes are currently being removed from the cluster, no endpoint information for the removed nodes is displayed.</p>
    **/
    public openapisdk.models.operations.PostDescribeCacheClustersResponse postDescribeCacheClusters(openapisdk.models.operations.PostDescribeCacheClustersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DescribeCacheClusters");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostDescribeCacheClustersResponse res = new openapisdk.models.operations.PostDescribeCacheClustersResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postDescribeCacheEngineVersions - Returns a list of the available cache engines and their versions.
    **/
    public openapisdk.models.operations.PostDescribeCacheEngineVersionsResponse postDescribeCacheEngineVersions(openapisdk.models.operations.PostDescribeCacheEngineVersionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DescribeCacheEngineVersions");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostDescribeCacheEngineVersionsResponse res = new openapisdk.models.operations.PostDescribeCacheEngineVersionsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postDescribeCacheParameterGroups - Returns a list of cache parameter group descriptions. If a cache parameter group name is specified, the list contains only the descriptions for that group.
    **/
    public openapisdk.models.operations.PostDescribeCacheParameterGroupsResponse postDescribeCacheParameterGroups(openapisdk.models.operations.PostDescribeCacheParameterGroupsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DescribeCacheParameterGroups");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostDescribeCacheParameterGroupsResponse res = new openapisdk.models.operations.PostDescribeCacheParameterGroupsResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postDescribeCacheParameters - Returns the detailed parameter list for a particular cache parameter group.
    **/
    public openapisdk.models.operations.PostDescribeCacheParametersResponse postDescribeCacheParameters(openapisdk.models.operations.PostDescribeCacheParametersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DescribeCacheParameters");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostDescribeCacheParametersResponse res = new openapisdk.models.operations.PostDescribeCacheParametersResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postDescribeCacheSecurityGroups - Returns a list of cache security group descriptions. If a cache security group name is specified, the list contains only the description of that group. This applicable only when you have ElastiCache in Classic setup 
    **/
    public openapisdk.models.operations.PostDescribeCacheSecurityGroupsResponse postDescribeCacheSecurityGroups(openapisdk.models.operations.PostDescribeCacheSecurityGroupsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DescribeCacheSecurityGroups");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostDescribeCacheSecurityGroupsResponse res = new openapisdk.models.operations.PostDescribeCacheSecurityGroupsResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postDescribeCacheSubnetGroups - Returns a list of cache subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group. This is applicable only when you have ElastiCache in VPC setup. All ElastiCache clusters now launch in VPC by default. 
    **/
    public openapisdk.models.operations.PostDescribeCacheSubnetGroupsResponse postDescribeCacheSubnetGroups(openapisdk.models.operations.PostDescribeCacheSubnetGroupsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DescribeCacheSubnetGroups");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostDescribeCacheSubnetGroupsResponse res = new openapisdk.models.operations.PostDescribeCacheSubnetGroupsResponse() {{
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postDescribeEngineDefaultParameters - Returns the default engine and system parameter information for the specified cache engine.
    **/
    public openapisdk.models.operations.PostDescribeEngineDefaultParametersResponse postDescribeEngineDefaultParameters(openapisdk.models.operations.PostDescribeEngineDefaultParametersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DescribeEngineDefaultParameters");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostDescribeEngineDefaultParametersResponse res = new openapisdk.models.operations.PostDescribeEngineDefaultParametersResponse() {{
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postDescribeEvents - <p>Returns events related to clusters, cache security groups, and cache parameter groups. You can obtain events specific to a particular cluster, cache security group, or cache parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>
    **/
    public openapisdk.models.operations.PostDescribeEventsResponse postDescribeEvents(openapisdk.models.operations.PostDescribeEventsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DescribeEvents");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostDescribeEventsResponse res = new openapisdk.models.operations.PostDescribeEventsResponse() {{
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postDescribeGlobalReplicationGroups - Returns information about a particular global replication group. If no identifier is specified, returns information about all Global datastores. 
    **/
    public openapisdk.models.operations.PostDescribeGlobalReplicationGroupsResponse postDescribeGlobalReplicationGroups(openapisdk.models.operations.PostDescribeGlobalReplicationGroupsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DescribeGlobalReplicationGroups");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostDescribeGlobalReplicationGroupsResponse res = new openapisdk.models.operations.PostDescribeGlobalReplicationGroupsResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postDescribeReplicationGroups - <p>Returns information about a particular replication group. If no identifier is specified, <code>DescribeReplicationGroups</code> returns information about all replication groups.</p> <note> <p>This operation is valid for Redis only.</p> </note>
    **/
    public openapisdk.models.operations.PostDescribeReplicationGroupsResponse postDescribeReplicationGroups(openapisdk.models.operations.PostDescribeReplicationGroupsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DescribeReplicationGroups");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostDescribeReplicationGroupsResponse res = new openapisdk.models.operations.PostDescribeReplicationGroupsResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postDescribeReservedCacheNodes - Returns information about reserved cache nodes for this account, or about a specified reserved cache node.
    **/
    public openapisdk.models.operations.PostDescribeReservedCacheNodesResponse postDescribeReservedCacheNodes(openapisdk.models.operations.PostDescribeReservedCacheNodesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DescribeReservedCacheNodes");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostDescribeReservedCacheNodesResponse res = new openapisdk.models.operations.PostDescribeReservedCacheNodesResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postDescribeReservedCacheNodesOfferings - Lists available reserved cache node offerings.
    **/
    public openapisdk.models.operations.PostDescribeReservedCacheNodesOfferingsResponse postDescribeReservedCacheNodesOfferings(openapisdk.models.operations.PostDescribeReservedCacheNodesOfferingsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DescribeReservedCacheNodesOfferings");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostDescribeReservedCacheNodesOfferingsResponse res = new openapisdk.models.operations.PostDescribeReservedCacheNodesOfferingsResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postDescribeServiceUpdates - Returns details of the service updates
    **/
    public openapisdk.models.operations.PostDescribeServiceUpdatesResponse postDescribeServiceUpdates(openapisdk.models.operations.PostDescribeServiceUpdatesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DescribeServiceUpdates");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostDescribeServiceUpdatesResponse res = new openapisdk.models.operations.PostDescribeServiceUpdatesResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postDescribeSnapshots - <p>Returns information about cluster or replication group snapshots. By default, <code>DescribeSnapshots</code> lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cache cluster.</p> <note> <p>This operation is valid for Redis only.</p> </note>
    **/
    public openapisdk.models.operations.PostDescribeSnapshotsResponse postDescribeSnapshots(openapisdk.models.operations.PostDescribeSnapshotsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DescribeSnapshots");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostDescribeSnapshotsResponse res = new openapisdk.models.operations.PostDescribeSnapshotsResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postDescribeUpdateActions - Returns details of the update actions 
    **/
    public openapisdk.models.operations.PostDescribeUpdateActionsResponse postDescribeUpdateActions(openapisdk.models.operations.PostDescribeUpdateActionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DescribeUpdateActions");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostDescribeUpdateActionsResponse res = new openapisdk.models.operations.PostDescribeUpdateActionsResponse() {{
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postDescribeUserGroups - Returns a list of user groups.
    **/
    public openapisdk.models.operations.PostDescribeUserGroupsResponse postDescribeUserGroups(openapisdk.models.operations.PostDescribeUserGroupsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DescribeUserGroups");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostDescribeUserGroupsResponse res = new openapisdk.models.operations.PostDescribeUserGroupsResponse() {{
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postDescribeUsers - Returns a list of users.
    **/
    public openapisdk.models.operations.PostDescribeUsersResponse postDescribeUsers(openapisdk.models.operations.PostDescribeUsersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DescribeUsers");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostDescribeUsersResponse res = new openapisdk.models.operations.PostDescribeUsersResponse() {{
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postDisassociateGlobalReplicationGroup - Remove a secondary cluster from the Global datastore using the Global datastore name. The secondary cluster will no longer receive updates from the primary cluster, but will remain as a standalone cluster in that Amazon region.
    **/
    public openapisdk.models.operations.PostDisassociateGlobalReplicationGroupResponse postDisassociateGlobalReplicationGroup(openapisdk.models.operations.PostDisassociateGlobalReplicationGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=DisassociateGlobalReplicationGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostDisassociateGlobalReplicationGroupResponse res = new openapisdk.models.operations.PostDisassociateGlobalReplicationGroupResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postFailoverGlobalReplicationGroup - Used to failover the primary region to a selected secondary region. The selected secondary region will become primary, and all other clusters will become secondary.
    **/
    public openapisdk.models.operations.PostFailoverGlobalReplicationGroupResponse postFailoverGlobalReplicationGroup(openapisdk.models.operations.PostFailoverGlobalReplicationGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=FailoverGlobalReplicationGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostFailoverGlobalReplicationGroupResponse res = new openapisdk.models.operations.PostFailoverGlobalReplicationGroupResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postIncreaseNodeGroupsInGlobalReplicationGroup - Increase the number of node groups in the Global datastore
    **/
    public openapisdk.models.operations.PostIncreaseNodeGroupsInGlobalReplicationGroupResponse postIncreaseNodeGroupsInGlobalReplicationGroup(openapisdk.models.operations.PostIncreaseNodeGroupsInGlobalReplicationGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=IncreaseNodeGroupsInGlobalReplicationGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostIncreaseNodeGroupsInGlobalReplicationGroupResponse res = new openapisdk.models.operations.PostIncreaseNodeGroupsInGlobalReplicationGroupResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postIncreaseReplicaCount - Dynamically increases the number of replicas in a Redis (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation is performed with no cluster down time.
    **/
    public openapisdk.models.operations.PostIncreaseReplicaCountResponse postIncreaseReplicaCount(openapisdk.models.operations.PostIncreaseReplicaCountRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=IncreaseReplicaCount");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostIncreaseReplicaCountResponse res = new openapisdk.models.operations.PostIncreaseReplicaCountResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 485) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 486) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 487) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 488) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 489) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 490) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 491) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postListAllowedNodeTypeModifications - <p>Lists all available node types that you can scale your Redis cluster's or replication group's current node type.</p> <p>When you use the <code>ModifyCacheCluster</code> or <code>ModifyReplicationGroup</code> operations to scale your cluster or replication group, the value of the <code>CacheNodeType</code> parameter must be one of the node types returned by this operation.</p>
    **/
    public openapisdk.models.operations.PostListAllowedNodeTypeModificationsResponse postListAllowedNodeTypeModifications(openapisdk.models.operations.PostListAllowedNodeTypeModificationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=ListAllowedNodeTypeModifications");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostListAllowedNodeTypeModificationsResponse res = new openapisdk.models.operations.PostListAllowedNodeTypeModificationsResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postListTagsForResource - <p>Lists all tags currently on a named resource.</p> <p> A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p> <p>If the cluster is not in the <i>available</i> state, <code>ListTagsForResource</code> returns an error.</p>
    **/
    public openapisdk.models.operations.PostListTagsForResourceResponse postListTagsForResource(openapisdk.models.operations.PostListTagsForResourceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=ListTagsForResource");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostListTagsForResourceResponse res = new openapisdk.models.operations.PostListTagsForResourceResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 485) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 486) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 487) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 488) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 489) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 490) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postModifyCacheCluster - Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration parameters by specifying the parameters and the new values.
    **/
    public openapisdk.models.operations.PostModifyCacheClusterResponse postModifyCacheCluster(openapisdk.models.operations.PostModifyCacheClusterRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=ModifyCacheCluster");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostModifyCacheClusterResponse res = new openapisdk.models.operations.PostModifyCacheClusterResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 485) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 486) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 487) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 488) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 489) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 490) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postModifyCacheParameterGroup - Modifies the parameters of a cache parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
    **/
    public openapisdk.models.operations.PostModifyCacheParameterGroupResponse postModifyCacheParameterGroup(openapisdk.models.operations.PostModifyCacheParameterGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=ModifyCacheParameterGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostModifyCacheParameterGroupResponse res = new openapisdk.models.operations.PostModifyCacheParameterGroupResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postModifyCacheSubnetGroup - Modifies an existing cache subnet group.
    **/
    public openapisdk.models.operations.PostModifyCacheSubnetGroupResponse postModifyCacheSubnetGroup(openapisdk.models.operations.PostModifyCacheSubnetGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=ModifyCacheSubnetGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostModifyCacheSubnetGroupResponse res = new openapisdk.models.operations.PostModifyCacheSubnetGroupResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postModifyGlobalReplicationGroup - Modifies the settings for a Global datastore.
    **/
    public openapisdk.models.operations.PostModifyGlobalReplicationGroupResponse postModifyGlobalReplicationGroup(openapisdk.models.operations.PostModifyGlobalReplicationGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=ModifyGlobalReplicationGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostModifyGlobalReplicationGroupResponse res = new openapisdk.models.operations.PostModifyGlobalReplicationGroupResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postModifyReplicationGroup - <p>Modifies the settings for a replication group.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/scaling-redis-cluster-mode-enabled.html">Scaling for Amazon ElastiCache for Redis (cluster mode enabled)</a> in the ElastiCache User Guide</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroupShardConfiguration.html">ModifyReplicationGroupShardConfiguration</a> in the ElastiCache API Reference</p> </li> </ul> <note> <p>This operation is valid for Redis only.</p> </note>
    **/
    public openapisdk.models.operations.PostModifyReplicationGroupResponse postModifyReplicationGroup(openapisdk.models.operations.PostModifyReplicationGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=ModifyReplicationGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostModifyReplicationGroupResponse res = new openapisdk.models.operations.PostModifyReplicationGroupResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 485) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 486) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 487) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 488) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 489) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 490) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 491) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 492) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 493) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 494) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 495) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postModifyReplicationGroupShardConfiguration - Modifies a replication group's shards (node groups) by allowing you to add shards, remove shards, or rebalance the keyspaces among existing shards.
    **/
    public openapisdk.models.operations.PostModifyReplicationGroupShardConfigurationResponse postModifyReplicationGroupShardConfiguration(openapisdk.models.operations.PostModifyReplicationGroupShardConfigurationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=ModifyReplicationGroupShardConfiguration");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostModifyReplicationGroupShardConfigurationResponse res = new openapisdk.models.operations.PostModifyReplicationGroupShardConfigurationResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 485) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 486) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 487) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 488) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 489) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postModifyUser - Changes user password(s) and/or access string.
    **/
    public openapisdk.models.operations.PostModifyUserResponse postModifyUser(openapisdk.models.operations.PostModifyUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=ModifyUser");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostModifyUserResponse res = new openapisdk.models.operations.PostModifyUserResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postModifyUserGroup - Changes the list of users that belong to the user group.
    **/
    public openapisdk.models.operations.PostModifyUserGroupResponse postModifyUserGroup(openapisdk.models.operations.PostModifyUserGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=ModifyUserGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostModifyUserGroupResponse res = new openapisdk.models.operations.PostModifyUserGroupResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 485) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 486) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPurchaseReservedCacheNodesOffering - Allows you to purchase a reserved cache node offering. Reserved nodes are not eligible for cancellation and are non-refundable. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/reserved-nodes.html">Managing Costs with Reserved Nodes</a> for Redis or <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/reserved-nodes.html">Managing Costs with Reserved Nodes</a> for Memcached.
    **/
    public openapisdk.models.operations.PostPurchaseReservedCacheNodesOfferingResponse postPurchaseReservedCacheNodesOffering(openapisdk.models.operations.PostPurchaseReservedCacheNodesOfferingRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=PurchaseReservedCacheNodesOffering");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostPurchaseReservedCacheNodesOfferingResponse res = new openapisdk.models.operations.PostPurchaseReservedCacheNodesOfferingResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 485) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postRebalanceSlotsInGlobalReplicationGroup - Redistribute slots to ensure uniform distribution across existing shards in the cluster.
    **/
    public openapisdk.models.operations.PostRebalanceSlotsInGlobalReplicationGroupResponse postRebalanceSlotsInGlobalReplicationGroup(openapisdk.models.operations.PostRebalanceSlotsInGlobalReplicationGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=RebalanceSlotsInGlobalReplicationGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostRebalanceSlotsInGlobalReplicationGroupResponse res = new openapisdk.models.operations.PostRebalanceSlotsInGlobalReplicationGroupResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postRebootCacheCluster - <p>Reboots some, or all, of the cache nodes within a provisioned cluster. This operation applies any modified cache parameter groups to the cluster. The reboot operation takes place as soon as possible, and results in a momentary outage to the cluster. During the reboot, the cluster status is set to REBOOTING.</p> <p>The reboot causes the contents of the cache (for each cache node being rebooted) to be lost.</p> <p>When the reboot is complete, a cluster event is created.</p> <p>Rebooting a cluster is currently supported on Memcached and Redis (cluster mode disabled) clusters. Rebooting is not supported on Redis (cluster mode enabled) clusters.</p> <p>If you make changes to parameters that require a Redis (cluster mode enabled) cluster reboot for the changes to be applied, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.Rebooting.html">Rebooting a Cluster</a> for an alternate process.</p>
    **/
    public openapisdk.models.operations.PostRebootCacheClusterResponse postRebootCacheCluster(openapisdk.models.operations.PostRebootCacheClusterRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=RebootCacheCluster");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostRebootCacheClusterResponse res = new openapisdk.models.operations.PostRebootCacheClusterResponse() {{
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postRemoveTagsFromResource - Removes the tags identified by the <code>TagKeys</code> list from the named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.
    **/
    public openapisdk.models.operations.PostRemoveTagsFromResourceResponse postRemoveTagsFromResource(openapisdk.models.operations.PostRemoveTagsFromResourceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=RemoveTagsFromResource");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostRemoveTagsFromResourceResponse res = new openapisdk.models.operations.PostRemoveTagsFromResourceResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 485) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 486) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 487) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 488) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 489) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 490) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 491) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postResetCacheParameterGroup - Modifies the parameters of a cache parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire cache parameter group, specify the <code>ResetAllParameters</code> and <code>CacheParameterGroupName</code> parameters.
    **/
    public openapisdk.models.operations.PostResetCacheParameterGroupResponse postResetCacheParameterGroup(openapisdk.models.operations.PostResetCacheParameterGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=ResetCacheParameterGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostResetCacheParameterGroupResponse res = new openapisdk.models.operations.PostResetCacheParameterGroupResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postRevokeCacheSecurityGroupIngress - Revokes ingress from a cache security group. Use this operation to disallow access from an Amazon EC2 security group that had been previously authorized.
    **/
    public openapisdk.models.operations.PostRevokeCacheSecurityGroupIngressResponse postRevokeCacheSecurityGroupIngress(openapisdk.models.operations.PostRevokeCacheSecurityGroupIngressRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=RevokeCacheSecurityGroupIngress");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostRevokeCacheSecurityGroupIngressResponse res = new openapisdk.models.operations.PostRevokeCacheSecurityGroupIngressResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postStartMigration - Start the migration of data.
    **/
    public openapisdk.models.operations.PostStartMigrationResponse postStartMigration(openapisdk.models.operations.PostStartMigrationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=StartMigration");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostStartMigrationResponse res = new openapisdk.models.operations.PostStartMigrationResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postTestFailover - <p>Represents the input of a <code>TestFailover</code> operation which test automatic failover on a specified node group (called shard in the console) in a replication group (called cluster in the console).</p> <p class="title"> <b>Note the following</b> </p> <ul> <li> <p>A customer can use this operation to test automatic failover on up to 5 shards (called node groups in the ElastiCache API and Amazon CLI) in any rolling 24-hour period.</p> </li> <li> <p>If calling this operation on shards in different clusters (called replication groups in the API and CLI), the calls can be made concurrently.</p> <p> </p> </li> <li> <p>If calling this operation multiple times on different shards in the same Redis (cluster mode enabled) replication group, the first node replacement must complete before a subsequent call can be made.</p> </li> <li> <p>To determine whether the node replacement is complete you can check Events using the Amazon ElastiCache console, the Amazon CLI, or the ElastiCache API. Look for the following automatic failover related events, listed here in order of occurrance:</p> <ol> <li> <p>Replication group message: <code>Test Failover API called for node group &lt;node-group-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Replication group message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Cache cluster message: <code>Recovering cache nodes &lt;node-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Finished recovery for cache nodes &lt;node-id&gt;</code> </p> </li> </ol> <p>For more information see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ECEvents.Viewing.html">Viewing ElastiCache Events</a> in the <i>ElastiCache User Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> in the ElastiCache API Reference</p> </li> </ul> </li> </ul> <p>Also see, <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html#auto-failover-test">Testing Multi-AZ </a> in the <i>ElastiCache User Guide</i>.</p>
    **/
    public openapisdk.models.operations.PostTestFailoverResponse postTestFailover(openapisdk.models.operations.PostTestFailoverRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#Action=TestFailover");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostTestFailoverResponse res = new openapisdk.models.operations.PostTestFailoverResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 485) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 486) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 487) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 488) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
}