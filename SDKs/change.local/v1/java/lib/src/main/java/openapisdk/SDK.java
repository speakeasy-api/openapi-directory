

package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.SpeakeasyHTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import org.apache.http.NameValuePair;


public class SDK {
	public static final String[] SERVERS = {
		"http://change.local",
		"https://{defaultHost}",
	};
  		

	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	
	private String _serverUrl;
	private String _language = "java";
	private String _sdkVersion = "0.0.1";
	private String _genVersion = "internal";

	public static class Builder {
		private HTTPClient client;
		
		private String serverUrl;
		private java.util.Map<String, String> params = new java.util.HashMap<String, String>();

		private Builder() {
		}

		public Builder setClient(HTTPClient client) {
			this.client = client;
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
			return new SDK(this.client, this.serverUrl, this.params);
		}
	}

	public static Builder builder() {
		return new Builder();
	}

	private SDK(HTTPClient client, String serverUrl, java.util.Map<String, String> params) throws Exception {
		this._defaultClient = client;
		
		if (this._defaultClient == null) {
			this._defaultClient = new SpeakeasyHTTPClient();
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
     * getApiV1DonationsCarbonCalculate - Calculate shipping carbon offset
     *
     * Calculates the donation amount (to CarbonFund 501\(c\)3) needed to offset a physical shipment. This calculation depends on the weight, primary transportation method, and distance of the shipment. Provide the distance of the shipment using the origin and destination address, or directly with the number of miles. For convenience, this endpoint also returns the id of the nonprofit CarbonFund, for making a subsequent donation to. See the [Carbon offsets guide](/recipes/carbon-offsets/) for more on using this endpoint.
    **/
    public openapisdk.models.operations.GetApiV1DonationsCarbonCalculateResponse getApiV1DonationsCarbonCalculate(openapisdk.models.operations.GetApiV1DonationsCarbonCalculateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/donations/carbon_calculate");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetApiV1DonationsCarbonCalculateResponse res = new openapisdk.models.operations.GetApiV1DonationsCarbonCalculateResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getApiV1DonationsCarbonStats - Retrieve carbon offset stats
     *
     * Measures your carbon offset impact in relatable terms. Provide the id of a donation to CarbonFund to see stats about that specific donation. If you omit the donation id, this endpoint returns aggregate stats for all of your CarbonFund donations.
    **/
    public openapisdk.models.operations.GetApiV1DonationsCarbonStatsResponse getApiV1DonationsCarbonStats(openapisdk.models.operations.GetApiV1DonationsCarbonStatsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/donations/carbon_stats");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetApiV1DonationsCarbonStatsResponse res = new openapisdk.models.operations.GetApiV1DonationsCarbonStatsResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getApiV1DonationsCryptoCalculate - Calculate crypto carbon offset
     *
     * Calculates the donation amount (to CarbonFund 501\(c\)3) needed to offset a cryptocurrency transaction. For convenience, this endpoint also returns the id of the nonprofit CarbonFund, for making a subsequent donation to. See the [Carbon offsets guide](/recipes/carbon-offsets/) for more on using this endpoint.
    **/
    public openapisdk.models.operations.GetApiV1DonationsCryptoCalculateResponse getApiV1DonationsCryptoCalculate(openapisdk.models.operations.GetApiV1DonationsCryptoCalculateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/donations/crypto_calculate");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetApiV1DonationsCryptoCalculateResponse res = new openapisdk.models.operations.GetApiV1DonationsCryptoCalculateResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getApiV1DonationsIndex - List your donations
     *
     * Retrieves a list of donations you've previously made. The donations are returned in order of creation, with the most recent donations appearing first. This endpoint is paginated.
    **/
    public openapisdk.models.operations.GetApiV1DonationsIndexResponse getApiV1DonationsIndex(openapisdk.models.operations.GetApiV1DonationsIndexRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/donations/index");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetApiV1DonationsIndexResponse res = new openapisdk.models.operations.GetApiV1DonationsIndexResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getApiV1DonationsShow - Retrieve a donation
     *
     * Retrieves the details of a donation you've previously made.
    **/
    public openapisdk.models.operations.GetApiV1DonationsShowResponse getApiV1DonationsShow(openapisdk.models.operations.GetApiV1DonationsShowRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/donations/show");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetApiV1DonationsShowResponse res = new openapisdk.models.operations.GetApiV1DonationsShowResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getApiV1NonprofitsList - Search a nonprofit
     *
     * Retrieves a list of nonprofits whose names match the provided name. This endpoint is paginated.
    **/
    public openapisdk.models.operations.GetApiV1NonprofitsListResponse getApiV1NonprofitsList(openapisdk.models.operations.GetApiV1NonprofitsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/nonprofits/list");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetApiV1NonprofitsListResponse res = new openapisdk.models.operations.GetApiV1NonprofitsListResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getApiV1NonprofitsShow - Show a nonprofit
     *
     * Retrieves information for a nonprofit.
    **/
    public openapisdk.models.operations.GetApiV1NonprofitsShowResponse getApiV1NonprofitsShow(openapisdk.models.operations.GetApiV1NonprofitsShowRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/nonprofits/show");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetApiV1NonprofitsShowResponse res = new openapisdk.models.operations.GetApiV1NonprofitsShowResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * postApiV1DonationsCreate - Create a donation
     *
     * Creates a donation to any nonprofit. CHANGE keeps track of your donations, bills you at the end of the month, and handles the nonprofit payouts for you.
    **/
    public openapisdk.models.operations.PostApiV1DonationsCreateResponse postApiV1DonationsCreate(openapisdk.models.operations.PostApiV1DonationsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/donations/create");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostApiV1DonationsCreateResponse res = new openapisdk.models.operations.PostApiV1DonationsCreateResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
}