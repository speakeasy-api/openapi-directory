

package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.SpeakeasyHTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

/** SDK Documentation: https://docs.aws.amazon.com/forecast/ - Amazon Web Services documentation**/
public class SDK {
	public static final String[] SERVERS = {
		"http://forecast.{region}.amazonaws.com",
		"https://forecast.{region}.amazonaws.com",
		"http://forecast.{region}.amazonaws.com.cn",
		"https://forecast.{region}.amazonaws.com.cn",
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
     * createDataset - <p>Creates an Amazon Forecast dataset. The information about the dataset that you provide helps Forecast understand how to consume the data for model training. This includes the following:</p> <ul> <li> <p> <i> <code>DataFrequency</code> </i> - How frequently your historical time-series data is collected.</p> </li> <li> <p> <i> <code>Domain</code> </i> and <i> <code>DatasetType</code> </i> - Each dataset has an associated dataset domain and a type within the domain. Amazon Forecast provides a list of predefined domains and types within each domain. For each unique dataset domain and type within the domain, Amazon Forecast requires your data to include a minimum set of predefined fields.</p> </li> <li> <p> <i> <code>Schema</code> </i> - A schema specifies the fields in the dataset, including the field name and data type.</p> </li> </ul> <p>After creating a dataset, you import your training data into it and add the dataset to a dataset group. You use the dataset group to create a predictor. For more information, see <a>howitworks-datasets-groups</a>.</p> <p>To get a list of all your datasets, use the <a>ListDatasets</a> operation.</p> <p>For example Forecast datasets, see the <a href="https://github.com/aws-samples/amazon-forecast-samples">Amazon Forecast Sample GitHub repository</a>.</p> <note> <p>The <code>Status</code> of a dataset must be <code>ACTIVE</code> before you can import training data. Use the <a>DescribeDataset</a> operation to get the status.</p> </note>
    **/
    public openapisdk.models.operations.CreateDatasetResponse createDataset(openapisdk.models.operations.CreateDatasetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.CreateDataset");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
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

        openapisdk.models.operations.CreateDatasetResponse res = new openapisdk.models.operations.CreateDatasetResponse() {{
            createDatasetResponse = null;
            invalidInputException = null;
            resourceAlreadyExistsException = null;
            limitExceededException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CreateDatasetResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CreateDatasetResponse.class);
                res.createDatasetResponse = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidInputException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceAlreadyExistsException = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.limitExceededException = out;
            }
        }

        return res;
    }
	
	
    /**
     * createDatasetGroup - <p>Creates a dataset group, which holds a collection of related datasets. You can add datasets to the dataset group when you create the dataset group, or later by using the <a>UpdateDatasetGroup</a> operation.</p> <p>After creating a dataset group and adding datasets, you use the dataset group when you create a predictor. For more information, see <a>howitworks-datasets-groups</a>.</p> <p>To get a list of all your datasets groups, use the <a>ListDatasetGroups</a> operation.</p> <note> <p>The <code>Status</code> of a dataset group must be <code>ACTIVE</code> before you can use the dataset group to create a predictor. To get the status, use the <a>DescribeDatasetGroup</a> operation.</p> </note>
    **/
    public openapisdk.models.operations.CreateDatasetGroupResponse createDatasetGroup(openapisdk.models.operations.CreateDatasetGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.CreateDatasetGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
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

        openapisdk.models.operations.CreateDatasetGroupResponse res = new openapisdk.models.operations.CreateDatasetGroupResponse() {{
            createDatasetGroupResponse = null;
            invalidInputException = null;
            resourceAlreadyExistsException = null;
            resourceNotFoundException = null;
            resourceInUseException = null;
            limitExceededException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CreateDatasetGroupResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CreateDatasetGroupResponse.class);
                res.createDatasetGroupResponse = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidInputException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceAlreadyExistsException = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceNotFoundException = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceInUseException = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.limitExceededException = out;
            }
        }

        return res;
    }
	
	
    /**
     * createDatasetImportJob - <p>Imports your training data to an Amazon Forecast dataset. You provide the location of your training data in an Amazon Simple Storage Service (Amazon S3) bucket and the Amazon Resource Name (ARN) of the dataset that you want to import the data to.</p> <p>You must specify a <a>DataSource</a> object that includes an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the data, as Amazon Forecast makes a copy of your data and processes it in an internal AWS system. For more information, see <a>aws-forecast-iam-roles</a>.</p> <p>The training data must be in CSV format. The delimiter must be a comma (,).</p> <p>You can specify the path to a specific CSV file, the S3 bucket, or to a folder in the S3 bucket. For the latter two cases, Amazon Forecast imports all files up to the limit of 10,000 files.</p> <p>Because dataset imports are not aggregated, your most recent dataset import is the one that is used when training a predictor or generating a forecast. Make sure that your most recent dataset import contains all of the data you want to model off of, and not just the new data collected since the previous import.</p> <p>To get a list of all your dataset import jobs, filtered by specified criteria, use the <a>ListDatasetImportJobs</a> operation.</p>
    **/
    public openapisdk.models.operations.CreateDatasetImportJobResponse createDatasetImportJob(openapisdk.models.operations.CreateDatasetImportJobRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.CreateDatasetImportJob");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
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

        openapisdk.models.operations.CreateDatasetImportJobResponse res = new openapisdk.models.operations.CreateDatasetImportJobResponse() {{
            createDatasetImportJobResponse = null;
            invalidInputException = null;
            resourceAlreadyExistsException = null;
            resourceNotFoundException = null;
            resourceInUseException = null;
            limitExceededException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CreateDatasetImportJobResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CreateDatasetImportJobResponse.class);
                res.createDatasetImportJobResponse = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidInputException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceAlreadyExistsException = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceNotFoundException = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceInUseException = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.limitExceededException = out;
            }
        }

        return res;
    }
	
	
    /**
     * createForecast - <p>Creates a forecast for each item in the <code>TARGET_TIME_SERIES</code> dataset that was used to train the predictor. This is known as inference. To retrieve the forecast for a single item at low latency, use the operation. To export the complete forecast into your Amazon Simple Storage Service (Amazon S3) bucket, use the <a>CreateForecastExportJob</a> operation.</p> <p>The range of the forecast is determined by the <code>ForecastHorizon</code> value, which you specify in the <a>CreatePredictor</a> request. When you query a forecast, you can request a specific date range within the forecast.</p> <p>To get a list of all your forecasts, use the <a>ListForecasts</a> operation.</p> <note> <p>The forecasts generated by Amazon Forecast are in the same time zone as the dataset that was used to create the predictor.</p> </note> <p>For more information, see <a>howitworks-forecast</a>.</p> <note> <p>The <code>Status</code> of the forecast must be <code>ACTIVE</code> before you can query or export the forecast. Use the <a>DescribeForecast</a> operation to get the status.</p> </note>
    **/
    public openapisdk.models.operations.CreateForecastResponse createForecast(openapisdk.models.operations.CreateForecastRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.CreateForecast");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
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

        openapisdk.models.operations.CreateForecastResponse res = new openapisdk.models.operations.CreateForecastResponse() {{
            createForecastResponse = null;
            invalidInputException = null;
            resourceAlreadyExistsException = null;
            resourceNotFoundException = null;
            resourceInUseException = null;
            limitExceededException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CreateForecastResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CreateForecastResponse.class);
                res.createForecastResponse = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidInputException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceAlreadyExistsException = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceNotFoundException = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceInUseException = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.limitExceededException = out;
            }
        }

        return res;
    }
	
	
    /**
     * createForecastExportJob - <p>Exports a forecast created by the <a>CreateForecast</a> operation to your Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions:</p> <p>&lt;ForecastExportJobName&gt;_&lt;ExportTimestamp&gt;_&lt;PartNumber&gt;</p> <p>where the &lt;ExportTimestamp&gt; component is in Java SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ).</p> <p>You must specify a <a>DataDestination</a> object that includes an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <p>For more information, see <a>howitworks-forecast</a>.</p> <p>To get a list of all your forecast export jobs, use the <a>ListForecastExportJobs</a> operation.</p> <note> <p>The <code>Status</code> of the forecast export job must be <code>ACTIVE</code> before you can access the forecast in your Amazon S3 bucket. To get the status, use the <a>DescribeForecastExportJob</a> operation.</p> </note>
    **/
    public openapisdk.models.operations.CreateForecastExportJobResponse createForecastExportJob(openapisdk.models.operations.CreateForecastExportJobRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.CreateForecastExportJob");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
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

        openapisdk.models.operations.CreateForecastExportJobResponse res = new openapisdk.models.operations.CreateForecastExportJobResponse() {{
            createForecastExportJobResponse = null;
            invalidInputException = null;
            resourceAlreadyExistsException = null;
            resourceNotFoundException = null;
            resourceInUseException = null;
            limitExceededException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CreateForecastExportJobResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CreateForecastExportJobResponse.class);
                res.createForecastExportJobResponse = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidInputException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceAlreadyExistsException = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceNotFoundException = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceInUseException = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.limitExceededException = out;
            }
        }

        return res;
    }
	
	
    /**
     * createPredictor - <p>Creates an Amazon Forecast predictor.</p> <p>In the request, provide a dataset group and either specify an algorithm or let Amazon Forecast choose an algorithm for you using AutoML. If you specify an algorithm, you also can override algorithm-specific hyperparameters.</p> <p>Amazon Forecast uses the algorithm to train a predictor using the latest version of the datasets in the specified dataset group. You can then generate a forecast using the <a>CreateForecast</a> operation.</p> <p> To see the evaluation metrics, use the <a>GetAccuracyMetrics</a> operation. </p> <p>You can specify a featurization configuration to fill and aggregate the data fields in the <code>TARGET_TIME_SERIES</code> dataset to improve model training. For more information, see <a>FeaturizationConfig</a>.</p> <p>For RELATED_TIME_SERIES datasets, <code>CreatePredictor</code> verifies that the <code>DataFrequency</code> specified when the dataset was created matches the <code>ForecastFrequency</code>. TARGET_TIME_SERIES datasets don't have this restriction. Amazon Forecast also verifies the delimiter and timestamp format. For more information, see <a>howitworks-datasets-groups</a>.</p> <p>By default, predictors are trained and evaluated at the 0.1 (P10), 0.5 (P50), and 0.9 (P90) quantiles. You can choose custom forecast types to train and evaluate your predictor by setting the <code>ForecastTypes</code>. </p> <p> <b>AutoML</b> </p> <p>If you want Amazon Forecast to evaluate each algorithm and choose the one that minimizes the <code>objective function</code>, set <code>PerformAutoML</code> to <code>true</code>. The <code>objective function</code> is defined as the mean of the weighted losses over the forecast types. By default, these are the p10, p50, and p90 quantile losses. For more information, see <a>EvaluationResult</a>.</p> <p>When AutoML is enabled, the following properties are disallowed:</p> <ul> <li> <p> <code>AlgorithmArn</code> </p> </li> <li> <p> <code>HPOConfig</code> </p> </li> <li> <p> <code>PerformHPO</code> </p> </li> <li> <p> <code>TrainingParameters</code> </p> </li> </ul> <p>To get a list of all of your predictors, use the <a>ListPredictors</a> operation.</p> <note> <p>Before you can use the predictor to create a forecast, the <code>Status</code> of the predictor must be <code>ACTIVE</code>, signifying that training has completed. To get the status, use the <a>DescribePredictor</a> operation.</p> </note>
    **/
    public openapisdk.models.operations.CreatePredictorResponse createPredictor(openapisdk.models.operations.CreatePredictorRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.CreatePredictor");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
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

        openapisdk.models.operations.CreatePredictorResponse res = new openapisdk.models.operations.CreatePredictorResponse() {{
            createPredictorResponse = null;
            invalidInputException = null;
            resourceAlreadyExistsException = null;
            resourceNotFoundException = null;
            resourceInUseException = null;
            limitExceededException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CreatePredictorResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CreatePredictorResponse.class);
                res.createPredictorResponse = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidInputException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceAlreadyExistsException = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceNotFoundException = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceInUseException = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.limitExceededException = out;
            }
        }

        return res;
    }
	
	
    /**
     * createPredictorBacktestExportJob - <p>Exports backtest forecasts and accuracy metrics generated by the <a>CreatePredictor</a> operation. Two folders containing CSV files are exported to your specified S3 bucket.</p> <p> The export file names will match the following conventions:</p> <p> <code>&lt;ExportJobName&gt;_&lt;ExportTimestamp&gt;_&lt;PartNumber&gt;.csv</code> </p> <p>The &lt;ExportTimestamp&gt; component is in Java SimpleDate format (yyyy-MM-ddTHH-mm-ssZ).</p> <p>You must specify a <a>DataDestination</a> object that includes an Amazon S3 bucket and an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <note> <p>The <code>Status</code> of the export job must be <code>ACTIVE</code> before you can access the export in your Amazon S3 bucket. To get the status, use the <a>DescribePredictorBacktestExportJob</a> operation.</p> </note>
    **/
    public openapisdk.models.operations.CreatePredictorBacktestExportJobResponse createPredictorBacktestExportJob(openapisdk.models.operations.CreatePredictorBacktestExportJobRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.CreatePredictorBacktestExportJob");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
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

        openapisdk.models.operations.CreatePredictorBacktestExportJobResponse res = new openapisdk.models.operations.CreatePredictorBacktestExportJobResponse() {{
            createPredictorBacktestExportJobResponse = null;
            invalidInputException = null;
            resourceAlreadyExistsException = null;
            resourceNotFoundException = null;
            resourceInUseException = null;
            limitExceededException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CreatePredictorBacktestExportJobResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CreatePredictorBacktestExportJobResponse.class);
                res.createPredictorBacktestExportJobResponse = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidInputException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceAlreadyExistsException = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceNotFoundException = out;
            }
        }
        else if (httpRes.statusCode() == 483) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceInUseException = out;
            }
        }
        else if (httpRes.statusCode() == 484) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.limitExceededException = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteDataset - <p>Deletes an Amazon Forecast dataset that was created using the <a>CreateDataset</a> operation. You can only delete datasets that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status use the <a>DescribeDataset</a> operation.</p> <note> <p>Forecast does not automatically update any dataset groups that contain the deleted dataset. In order to update the dataset group, use the operation, omitting the deleted dataset's ARN.</p> </note>
    **/
    public openapisdk.models.operations.DeleteDatasetResponse deleteDataset(openapisdk.models.operations.DeleteDatasetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.DeleteDataset");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
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

        openapisdk.models.operations.DeleteDatasetResponse res = new openapisdk.models.operations.DeleteDatasetResponse() {{
            invalidInputException = null;
            resourceNotFoundException = null;
            resourceInUseException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidInputException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceNotFoundException = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceInUseException = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteDatasetGroup - <p>Deletes a dataset group created using the <a>CreateDatasetGroup</a> operation. You can only delete dataset groups that have a status of <code>ACTIVE</code>, <code>CREATE_FAILED</code>, or <code>UPDATE_FAILED</code>. To get the status, use the <a>DescribeDatasetGroup</a> operation.</p> <p>This operation deletes only the dataset group, not the datasets in the group.</p>
    **/
    public openapisdk.models.operations.DeleteDatasetGroupResponse deleteDatasetGroup(openapisdk.models.operations.DeleteDatasetGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.DeleteDatasetGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
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

        openapisdk.models.operations.DeleteDatasetGroupResponse res = new openapisdk.models.operations.DeleteDatasetGroupResponse() {{
            invalidInputException = null;
            resourceNotFoundException = null;
            resourceInUseException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidInputException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceNotFoundException = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceInUseException = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteDatasetImportJob - Deletes a dataset import job created using the <a>CreateDatasetImportJob</a> operation. You can delete only dataset import jobs that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeDatasetImportJob</a> operation.
    **/
    public openapisdk.models.operations.DeleteDatasetImportJobResponse deleteDatasetImportJob(openapisdk.models.operations.DeleteDatasetImportJobRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.DeleteDatasetImportJob");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
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

        openapisdk.models.operations.DeleteDatasetImportJobResponse res = new openapisdk.models.operations.DeleteDatasetImportJobResponse() {{
            invalidInputException = null;
            resourceNotFoundException = null;
            resourceInUseException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidInputException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceNotFoundException = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceInUseException = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteForecast - <p>Deletes a forecast created using the <a>CreateForecast</a> operation. You can delete only forecasts that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeForecast</a> operation.</p> <p>You can't delete a forecast while it is being exported. After a forecast is deleted, you can no longer query the forecast.</p>
    **/
    public openapisdk.models.operations.DeleteForecastResponse deleteForecast(openapisdk.models.operations.DeleteForecastRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.DeleteForecast");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
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

        openapisdk.models.operations.DeleteForecastResponse res = new openapisdk.models.operations.DeleteForecastResponse() {{
            invalidInputException = null;
            resourceNotFoundException = null;
            resourceInUseException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidInputException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceNotFoundException = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceInUseException = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteForecastExportJob - Deletes a forecast export job created using the <a>CreateForecastExportJob</a> operation. You can delete only export jobs that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeForecastExportJob</a> operation.
    **/
    public openapisdk.models.operations.DeleteForecastExportJobResponse deleteForecastExportJob(openapisdk.models.operations.DeleteForecastExportJobRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.DeleteForecastExportJob");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
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

        openapisdk.models.operations.DeleteForecastExportJobResponse res = new openapisdk.models.operations.DeleteForecastExportJobResponse() {{
            invalidInputException = null;
            resourceNotFoundException = null;
            resourceInUseException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidInputException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceNotFoundException = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceInUseException = out;
            }
        }

        return res;
    }
	
	
    /**
     * deletePredictor - Deletes a predictor created using the <a>CreatePredictor</a> operation. You can delete only predictor that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribePredictor</a> operation.
    **/
    public openapisdk.models.operations.DeletePredictorResponse deletePredictor(openapisdk.models.operations.DeletePredictorRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.DeletePredictor");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
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

        openapisdk.models.operations.DeletePredictorResponse res = new openapisdk.models.operations.DeletePredictorResponse() {{
            invalidInputException = null;
            resourceNotFoundException = null;
            resourceInUseException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidInputException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceNotFoundException = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceInUseException = out;
            }
        }

        return res;
    }
	
	
    /**
     * deletePredictorBacktestExportJob - Deletes a predictor backtest export job.
    **/
    public openapisdk.models.operations.DeletePredictorBacktestExportJobResponse deletePredictorBacktestExportJob(openapisdk.models.operations.DeletePredictorBacktestExportJobRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.DeletePredictorBacktestExportJob");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
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

        openapisdk.models.operations.DeletePredictorBacktestExportJobResponse res = new openapisdk.models.operations.DeletePredictorBacktestExportJobResponse() {{
            invalidInputException = null;
            resourceNotFoundException = null;
            resourceInUseException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidInputException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceNotFoundException = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceInUseException = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteResourceTree - <p>Deletes an entire resource tree. This operation will delete the parent resource and its child resources.</p> <p>Child resources are resources that were created from another resource. For example, when a forecast is generated from a predictor, the forecast is the child resource and the predictor is the parent resource.</p> <p>Amazon Forecast resources possess the following parent-child resource hierarchies:</p> <ul> <li> <p> <b>Dataset</b>: dataset import jobs</p> </li> <li> <p> <b>Dataset Group</b>: predictors, predictor backtest export jobs, forecasts, forecast export jobs</p> </li> <li> <p> <b>Predictor</b>: predictor backtest export jobs, forecasts, forecast export jobs</p> </li> <li> <p> <b>Forecast</b>: forecast export jobs</p> </li> </ul> <note> <p> <code>DeleteResourceTree</code> will only delete Amazon Forecast resources, and will not delete datasets or exported files stored in Amazon S3. </p> </note>
    **/
    public openapisdk.models.operations.DeleteResourceTreeResponse deleteResourceTree(openapisdk.models.operations.DeleteResourceTreeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.DeleteResourceTree");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
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

        openapisdk.models.operations.DeleteResourceTreeResponse res = new openapisdk.models.operations.DeleteResourceTreeResponse() {{
            invalidInputException = null;
            resourceNotFoundException = null;
            resourceInUseException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidInputException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceNotFoundException = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceInUseException = out;
            }
        }

        return res;
    }
	
	
    /**
     * describeDataset - <p>Describes an Amazon Forecast dataset created using the <a>CreateDataset</a> operation.</p> <p>In addition to listing the parameters specified in the <code>CreateDataset</code> request, this operation includes the following dataset properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> </ul>
    **/
    public openapisdk.models.operations.DescribeDatasetResponse describeDataset(openapisdk.models.operations.DescribeDatasetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.DescribeDataset");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
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

        openapisdk.models.operations.DescribeDatasetResponse res = new openapisdk.models.operations.DescribeDatasetResponse() {{
            describeDatasetResponse = null;
            invalidInputException = null;
            resourceNotFoundException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DescribeDatasetResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DescribeDatasetResponse.class);
                res.describeDatasetResponse = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidInputException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceNotFoundException = out;
            }
        }

        return res;
    }
	
	
    /**
     * describeDatasetGroup - <p>Describes a dataset group created using the <a>CreateDatasetGroup</a> operation.</p> <p>In addition to listing the parameters provided in the <code>CreateDatasetGroup</code> request, this operation includes the following properties:</p> <ul> <li> <p> <code>DatasetArns</code> - The datasets belonging to the group.</p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> </ul>
    **/
    public openapisdk.models.operations.DescribeDatasetGroupResponse describeDatasetGroup(openapisdk.models.operations.DescribeDatasetGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.DescribeDatasetGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
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

        openapisdk.models.operations.DescribeDatasetGroupResponse res = new openapisdk.models.operations.DescribeDatasetGroupResponse() {{
            describeDatasetGroupResponse = null;
            invalidInputException = null;
            resourceNotFoundException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DescribeDatasetGroupResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DescribeDatasetGroupResponse.class);
                res.describeDatasetGroupResponse = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidInputException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceNotFoundException = out;
            }
        }

        return res;
    }
	
	
    /**
     * describeDatasetImportJob - <p>Describes a dataset import job created using the <a>CreateDatasetImportJob</a> operation.</p> <p>In addition to listing the parameters provided in the <code>CreateDatasetImportJob</code> request, this operation includes the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>DataSize</code> </p> </li> <li> <p> <code>FieldStatistics</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>
    **/
    public openapisdk.models.operations.DescribeDatasetImportJobResponse describeDatasetImportJob(openapisdk.models.operations.DescribeDatasetImportJobRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.DescribeDatasetImportJob");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
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

        openapisdk.models.operations.DescribeDatasetImportJobResponse res = new openapisdk.models.operations.DescribeDatasetImportJobResponse() {{
            describeDatasetImportJobResponse = null;
            invalidInputException = null;
            resourceNotFoundException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DescribeDatasetImportJobResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DescribeDatasetImportJobResponse.class);
                res.describeDatasetImportJobResponse = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidInputException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceNotFoundException = out;
            }
        }

        return res;
    }
	
	
    /**
     * describeForecast - <p>Describes a forecast created using the <a>CreateForecast</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreateForecast</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>DatasetGroupArn</code> - The dataset group that provided the training data.</p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>
    **/
    public openapisdk.models.operations.DescribeForecastResponse describeForecast(openapisdk.models.operations.DescribeForecastRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.DescribeForecast");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
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

        openapisdk.models.operations.DescribeForecastResponse res = new openapisdk.models.operations.DescribeForecastResponse() {{
            describeForecastResponse = null;
            invalidInputException = null;
            resourceNotFoundException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DescribeForecastResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DescribeForecastResponse.class);
                res.describeForecastResponse = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidInputException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceNotFoundException = out;
            }
        }

        return res;
    }
	
	
    /**
     * describeForecastExportJob - <p>Describes a forecast export job created using the <a>CreateForecastExportJob</a> operation.</p> <p>In addition to listing the properties provided by the user in the <code>CreateForecastExportJob</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>
    **/
    public openapisdk.models.operations.DescribeForecastExportJobResponse describeForecastExportJob(openapisdk.models.operations.DescribeForecastExportJobRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.DescribeForecastExportJob");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
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

        openapisdk.models.operations.DescribeForecastExportJobResponse res = new openapisdk.models.operations.DescribeForecastExportJobResponse() {{
            describeForecastExportJobResponse = null;
            invalidInputException = null;
            resourceNotFoundException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DescribeForecastExportJobResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DescribeForecastExportJobResponse.class);
                res.describeForecastExportJobResponse = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidInputException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceNotFoundException = out;
            }
        }

        return res;
    }
	
	
    /**
     * describePredictor - <p>Describes a predictor created using the <a>CreatePredictor</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreatePredictor</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>DatasetImportJobArns</code> - The dataset import jobs used to import training data.</p> </li> <li> <p> <code>AutoMLAlgorithmArns</code> - If AutoML is performed, the algorithms that were evaluated.</p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>
    **/
    public openapisdk.models.operations.DescribePredictorResponse describePredictor(openapisdk.models.operations.DescribePredictorRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.DescribePredictor");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
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

        openapisdk.models.operations.DescribePredictorResponse res = new openapisdk.models.operations.DescribePredictorResponse() {{
            describePredictorResponse = null;
            invalidInputException = null;
            resourceNotFoundException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DescribePredictorResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DescribePredictorResponse.class);
                res.describePredictorResponse = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidInputException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceNotFoundException = out;
            }
        }

        return res;
    }
	
	
    /**
     * describePredictorBacktestExportJob - <p>Describes a predictor backtest export job created using the <a>CreatePredictorBacktestExportJob</a> operation.</p> <p>In addition to listing the properties provided by the user in the <code>CreatePredictorBacktestExportJob</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> (if an error occurred)</p> </li> </ul>
    **/
    public openapisdk.models.operations.DescribePredictorBacktestExportJobResponse describePredictorBacktestExportJob(openapisdk.models.operations.DescribePredictorBacktestExportJobRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.DescribePredictorBacktestExportJob");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
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

        openapisdk.models.operations.DescribePredictorBacktestExportJobResponse res = new openapisdk.models.operations.DescribePredictorBacktestExportJobResponse() {{
            describePredictorBacktestExportJobResponse = null;
            invalidInputException = null;
            resourceNotFoundException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DescribePredictorBacktestExportJobResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DescribePredictorBacktestExportJobResponse.class);
                res.describePredictorBacktestExportJobResponse = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidInputException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceNotFoundException = out;
            }
        }

        return res;
    }
	
	
    /**
     * getAccuracyMetrics - <p>Provides metrics on the accuracy of the models that were trained by the <a>CreatePredictor</a> operation. Use metrics to see how well the model performed and to decide whether to use the predictor to generate a forecast. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/metrics.html">Predictor Metrics</a>.</p> <p>This operation generates metrics for each backtest window that was evaluated. The number of backtest windows (<code>NumberOfBacktestWindows</code>) is specified using the <a>EvaluationParameters</a> object, which is optionally included in the <code>CreatePredictor</code> request. If <code>NumberOfBacktestWindows</code> isn't specified, the number defaults to one.</p> <p>The parameters of the <code>filling</code> method determine which items contribute to the metrics. If you want all items to contribute, specify <code>zero</code>. If you want only those items that have complete data in the range being evaluated to contribute, specify <code>nan</code>. For more information, see <a>FeaturizationMethod</a>.</p> <note> <p>Before you can get accuracy metrics, the <code>Status</code> of the predictor must be <code>ACTIVE</code>, signifying that training has completed. To get the status, use the <a>DescribePredictor</a> operation.</p> </note>
    **/
    public openapisdk.models.operations.GetAccuracyMetricsResponse getAccuracyMetrics(openapisdk.models.operations.GetAccuracyMetricsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.GetAccuracyMetrics");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
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

        openapisdk.models.operations.GetAccuracyMetricsResponse res = new openapisdk.models.operations.GetAccuracyMetricsResponse() {{
            getAccuracyMetricsResponse = null;
            invalidInputException = null;
            resourceNotFoundException = null;
            resourceInUseException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetAccuracyMetricsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetAccuracyMetricsResponse.class);
                res.getAccuracyMetricsResponse = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidInputException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceNotFoundException = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceInUseException = out;
            }
        }

        return res;
    }
	
	
    /**
     * listDatasetGroups - Returns a list of dataset groups created using the <a>CreateDatasetGroup</a> operation. For each dataset group, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the dataset group ARN with the <a>DescribeDatasetGroup</a> operation.
    **/
    public openapisdk.models.operations.ListDatasetGroupsResponse listDatasetGroups(openapisdk.models.operations.ListDatasetGroupsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.ListDatasetGroups");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
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

        openapisdk.models.operations.ListDatasetGroupsResponse res = new openapisdk.models.operations.ListDatasetGroupsResponse() {{
            listDatasetGroupsResponse = null;
            invalidNextTokenException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListDatasetGroupsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListDatasetGroupsResponse.class);
                res.listDatasetGroupsResponse = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidNextTokenException = out;
            }
        }

        return res;
    }
	
	
    /**
     * listDatasetImportJobs - Returns a list of dataset import jobs created using the <a>CreateDatasetImportJob</a> operation. For each import job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the ARN with the <a>DescribeDatasetImportJob</a> operation. You can filter the list by providing an array of <a>Filter</a> objects.
    **/
    public openapisdk.models.operations.ListDatasetImportJobsResponse listDatasetImportJobs(openapisdk.models.operations.ListDatasetImportJobsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.ListDatasetImportJobs");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
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

        openapisdk.models.operations.ListDatasetImportJobsResponse res = new openapisdk.models.operations.ListDatasetImportJobsResponse() {{
            listDatasetImportJobsResponse = null;
            invalidNextTokenException = null;
            invalidInputException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListDatasetImportJobsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListDatasetImportJobsResponse.class);
                res.listDatasetImportJobsResponse = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidNextTokenException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidInputException = out;
            }
        }

        return res;
    }
	
	
    /**
     * listDatasets - Returns a list of datasets created using the <a>CreateDataset</a> operation. For each dataset, a summary of its properties, including its Amazon Resource Name (ARN), is returned. To retrieve the complete set of properties, use the ARN with the <a>DescribeDataset</a> operation.
    **/
    public openapisdk.models.operations.ListDatasetsResponse listDatasets(openapisdk.models.operations.ListDatasetsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.ListDatasets");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
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

        openapisdk.models.operations.ListDatasetsResponse res = new openapisdk.models.operations.ListDatasetsResponse() {{
            listDatasetsResponse = null;
            invalidNextTokenException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListDatasetsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListDatasetsResponse.class);
                res.listDatasetsResponse = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidNextTokenException = out;
            }
        }

        return res;
    }
	
	
    /**
     * listForecastExportJobs - Returns a list of forecast export jobs created using the <a>CreateForecastExportJob</a> operation. For each forecast export job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). To retrieve the complete set of properties, use the ARN with the <a>DescribeForecastExportJob</a> operation. You can filter the list using an array of <a>Filter</a> objects.
    **/
    public openapisdk.models.operations.ListForecastExportJobsResponse listForecastExportJobs(openapisdk.models.operations.ListForecastExportJobsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.ListForecastExportJobs");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
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

        openapisdk.models.operations.ListForecastExportJobsResponse res = new openapisdk.models.operations.ListForecastExportJobsResponse() {{
            listForecastExportJobsResponse = null;
            invalidNextTokenException = null;
            invalidInputException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListForecastExportJobsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListForecastExportJobsResponse.class);
                res.listForecastExportJobsResponse = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidNextTokenException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidInputException = out;
            }
        }

        return res;
    }
	
	
    /**
     * listForecasts - Returns a list of forecasts created using the <a>CreateForecast</a> operation. For each forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). To retrieve the complete set of properties, specify the ARN with the <a>DescribeForecast</a> operation. You can filter the list using an array of <a>Filter</a> objects.
    **/
    public openapisdk.models.operations.ListForecastsResponse listForecasts(openapisdk.models.operations.ListForecastsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.ListForecasts");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
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

        openapisdk.models.operations.ListForecastsResponse res = new openapisdk.models.operations.ListForecastsResponse() {{
            listForecastsResponse = null;
            invalidNextTokenException = null;
            invalidInputException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListForecastsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListForecastsResponse.class);
                res.listForecastsResponse = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidNextTokenException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidInputException = out;
            }
        }

        return res;
    }
	
	
    /**
     * listPredictorBacktestExportJobs - <p>Returns a list of predictor backtest export jobs created using the <a>CreatePredictorBacktestExportJob</a> operation. This operation returns a summary for each backtest export job. You can filter the list using an array of <a>Filter</a> objects.</p> <p>To retrieve the complete set of properties for a particular backtest export job, use the ARN with the <a>DescribePredictorBacktestExportJob</a> operation.</p>
    **/
    public openapisdk.models.operations.ListPredictorBacktestExportJobsResponse listPredictorBacktestExportJobs(openapisdk.models.operations.ListPredictorBacktestExportJobsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.ListPredictorBacktestExportJobs");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
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

        openapisdk.models.operations.ListPredictorBacktestExportJobsResponse res = new openapisdk.models.operations.ListPredictorBacktestExportJobsResponse() {{
            listPredictorBacktestExportJobsResponse = null;
            invalidNextTokenException = null;
            invalidInputException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListPredictorBacktestExportJobsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListPredictorBacktestExportJobsResponse.class);
                res.listPredictorBacktestExportJobsResponse = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidNextTokenException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidInputException = out;
            }
        }

        return res;
    }
	
	
    /**
     * listPredictors - Returns a list of predictors created using the <a>CreatePredictor</a> operation. For each predictor, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the ARN with the <a>DescribePredictor</a> operation. You can filter the list using an array of <a>Filter</a> objects.
    **/
    public openapisdk.models.operations.ListPredictorsResponse listPredictors(openapisdk.models.operations.ListPredictorsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.ListPredictors");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
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

        openapisdk.models.operations.ListPredictorsResponse res = new openapisdk.models.operations.ListPredictorsResponse() {{
            listPredictorsResponse = null;
            invalidNextTokenException = null;
            invalidInputException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListPredictorsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListPredictorsResponse.class);
                res.listPredictorsResponse = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidNextTokenException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidInputException = out;
            }
        }

        return res;
    }
	
	
    /**
     * listTagsForResource - Lists the tags for an Amazon Forecast resource.
    **/
    public openapisdk.models.operations.ListTagsForResourceResponse listTagsForResource(openapisdk.models.operations.ListTagsForResourceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.ListTagsForResource");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
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

        openapisdk.models.operations.ListTagsForResourceResponse res = new openapisdk.models.operations.ListTagsForResourceResponse() {{
            listTagsForResourceResponse = null;
            resourceNotFoundException = null;
            invalidInputException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListTagsForResourceResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListTagsForResourceResponse.class);
                res.listTagsForResourceResponse = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceNotFoundException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidInputException = out;
            }
        }

        return res;
    }
	
	
    /**
     * stopResource - <p>Stops a resource.</p> <p>The resource undergoes the following states: <code>CREATE_STOPPING</code> and <code>CREATE_STOPPED</code>. You cannot resume a resource once it has been stopped.</p> <p>This operation can be applied to the following resources (and their corresponding child resources):</p> <ul> <li> <p>Dataset Import Job</p> </li> <li> <p>Predictor Job</p> </li> <li> <p>Forecast Job</p> </li> <li> <p>Forecast Export Job</p> </li> <li> <p>Predictor Backtest Export Job</p> </li> </ul>
    **/
    public openapisdk.models.operations.StopResourceResponse stopResource(openapisdk.models.operations.StopResourceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.StopResource");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
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

        openapisdk.models.operations.StopResourceResponse res = new openapisdk.models.operations.StopResourceResponse() {{
            invalidInputException = null;
            limitExceededException = null;
            resourceNotFoundException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidInputException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.limitExceededException = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceNotFoundException = out;
            }
        }

        return res;
    }
	
	
    /**
     * tagResource - Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.
    **/
    public openapisdk.models.operations.TagResourceResponse tagResource(openapisdk.models.operations.TagResourceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.TagResource");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
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

        openapisdk.models.operations.TagResourceResponse res = new openapisdk.models.operations.TagResourceResponse() {{
            tagResourceResponse = null;
            resourceNotFoundException = null;
            limitExceededException = null;
            invalidInputException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.tagResourceResponse = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceNotFoundException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.limitExceededException = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidInputException = out;
            }
        }

        return res;
    }
	
	
    /**
     * untagResource - Deletes the specified tags from a resource.
    **/
    public openapisdk.models.operations.UntagResourceResponse untagResource(openapisdk.models.operations.UntagResourceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.UntagResource");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
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

        openapisdk.models.operations.UntagResourceResponse res = new openapisdk.models.operations.UntagResourceResponse() {{
            untagResourceResponse = null;
            resourceNotFoundException = null;
            invalidInputException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.untagResourceResponse = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceNotFoundException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidInputException = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateDatasetGroup - <p>Replaces the datasets in a dataset group with the specified datasets.</p> <note> <p>The <code>Status</code> of the dataset group must be <code>ACTIVE</code> before you can use the dataset group to create a predictor. Use the <a>DescribeDatasetGroup</a> operation to get the status.</p> </note>
    **/
    public openapisdk.models.operations.UpdateDatasetGroupResponse updateDatasetGroup(openapisdk.models.operations.UpdateDatasetGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AmazonForecast.UpdateDatasetGroup");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
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

        openapisdk.models.operations.UpdateDatasetGroupResponse res = new openapisdk.models.operations.UpdateDatasetGroupResponse() {{
            updateDatasetGroupResponse = null;
            invalidInputException = null;
            resourceNotFoundException = null;
            resourceInUseException = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateDatasetGroupResponse = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invalidInputException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceNotFoundException = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.resourceInUseException = out;
            }
        }

        return res;
    }
	
}