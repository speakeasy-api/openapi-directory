package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class ProPlanOrGreater {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public ProPlanOrGreater(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * daysSupplyDaysSupplyGet - Days worth of supply left on dealer lots
     *
     * Average, median, standard deviation, population variance, and whole region average of the 
     * days of supply left on dealer lots for a given brand and region. The average, median, stdDev, and pVar fields are calculated on
     * a dealer by dealer basis while the whole region average treats the entire region like a single dealership. 
     * The average field may differ from the whole region average, especially when dealers are out of 
     * a given model. 
     * 
     * The available brand and region names can be retrieved from their respective endpoints.
    **/
    public openapisdk.models.operations.DaysSupplyDaysSupplyGetResponse daysSupplyDaysSupplyGet(openapisdk.models.operations.DaysSupplyDaysSupplyGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/daysSupply");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DaysSupplyDaysSupplyGetResponse res = new openapisdk.models.operations.DaysSupplyDaysSupplyGetResponse() {{
            genericResponse = null;
            httpValidationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GenericResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GenericResponse.class);
                res.genericResponse = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.HttpValidationError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.HttpValidationError.class);
                res.httpValidationError = out;
            }
        }

        return res;
    }
	
	
    /**
     * daysToSellDaysToSellGet - Days a vehicle takes to sell
     *
     * Average, median, standard deviation, population variance, and whole region average of the 
     * number of days a vehicle spends on dealer lots for a given brand and region. The average, median, stdDev, and pVar fields are calculated on
     * a dealer by dealer basis while the whole region average treats the entire region like a single dealership. 
     * The average field may differ from the whole region average.
     * 
     * The available brand and region names can be retrieved from their respective endpoints.
    **/
    public openapisdk.models.operations.DaysToSellDaysToSellGetResponse daysToSellDaysToSellGet(openapisdk.models.operations.DaysToSellDaysToSellGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/daysToSell");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DaysToSellDaysToSellGetResponse res = new openapisdk.models.operations.DaysToSellDaysToSellGetResponse() {{
            genericResponse = null;
            httpValidationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GenericResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GenericResponse.class);
                res.genericResponse = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.HttpValidationError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.HttpValidationError.class);
                res.httpValidationError = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDealersGetDealersByIdGet - Premium. Dealers by ID
     *
     * Premium. Dealership information using the internal ID. Returns name, address, state, zipCode, and ID for a single dealer in the same format as the /getDealers endpoint.
     * Dealer IDs are generally retrieved via the /getDealers or /getDealersByRegion endpoints.
    **/
    public openapisdk.models.operations.GetDealersGetDealersByIdGetResponse getDealersGetDealersByIdGet(openapisdk.models.operations.GetDealersGetDealersByIdGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/getDealersByID");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDealersGetDealersByIdGetResponse res = new openapisdk.models.operations.GetDealersGetDealersByIdGetResponse() {{
            dealershipDataResp = null;
            httpValidationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DealershipDataResp out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DealershipDataResp.class);
                res.dealershipDataResp = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.HttpValidationError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.HttpValidationError.class);
                res.httpValidationError = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDealersGetDealersByRegionGet - Premium. Dealers in a region.
     *
     * Premium. Dealership information in a given region. Returns name, address, state, zipCode, and IDs. Results are paginated with up to 30 results per page.
    **/
    public openapisdk.models.operations.GetDealersGetDealersByRegionGetResponse getDealersGetDealersByRegionGet(openapisdk.models.operations.GetDealersGetDealersByRegionGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/getDealersByRegion");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDealersGetDealersByRegionGetResponse res = new openapisdk.models.operations.GetDealersGetDealersByRegionGetResponse() {{
            dealershipDataPaginatedResp = null;
            httpValidationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DealershipDataPaginatedResp out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DealershipDataPaginatedResp.class);
                res.dealershipDataPaginatedResp = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.HttpValidationError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.HttpValidationError.class);
                res.httpValidationError = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDealersGetDealersGet - Premium. Dealers in a zip code.
     *
     * Premium. Dealership information in a given zip code using the first 4 digits. Returns name, address, state, zipCode, and IDs.
     * For example a call with the zip code 92701 would return dealers with zip codes in the range [92700, 92709]
    **/
    public openapisdk.models.operations.GetDealersGetDealersGetResponse getDealersGetDealersGet(openapisdk.models.operations.GetDealersGetDealersGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/getDealers");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDealersGetDealersGetResponse res = new openapisdk.models.operations.GetDealersGetDealersGetResponse() {{
            dealershipDataResp = null;
            httpValidationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DealershipDataResp out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DealershipDataResp.class);
                res.dealershipDataResp = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.HttpValidationError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.HttpValidationError.class);
                res.httpValidationError = out;
            }
        }

        return res;
    }
	
	
    /**
     * getHistory2VehicleHistoryGet - Premium. Simple Vehicle History Report
     *
     * Premium. Provides a simple report detailing a vechicle's sales history at dealerships. Data includes the name of the dealership, dates it was for sale,
     * price, new/used condition, mileage, dealership state, and dealership zip code. Data availability goes back to early 2016. 
     * 
     * If your use case involves checking if a vehicle has appeared on the open market on or after a given date see 
     * the /vehicleSeen endpoint.
    **/
    public openapisdk.models.operations.GetHistory2VehicleHistoryGetResponse getHistory2VehicleHistoryGet(openapisdk.models.operations.GetHistory2VehicleHistoryGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/vehicleHistory");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetHistory2VehicleHistoryGetResponse res = new openapisdk.models.operations.GetHistory2VehicleHistoryGetResponse() {{
            historyResp = null;
            httpValidationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.HistoryResp out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.HistoryResp.class);
                res.historyResp = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.HttpValidationError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.HttpValidationError.class);
                res.httpValidationError = out;
            }
        }

        return res;
    }
	
}