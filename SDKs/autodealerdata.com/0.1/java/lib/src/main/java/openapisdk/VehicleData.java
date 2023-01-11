package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class VehicleData {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public VehicleData(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
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
	
	
    /**
     * getListings2Listings2Get - Flexible Listing Search
     *
     * Generic getter for listings supporting a wide array of selection criteria. This is the new primary listing endpoint and we will phase out the older listing endpoints over time.
     * The other listing endpoints return the same data, but are more restrictive in the available geographic and vehicle selection criteria.
     * 
     * Dealer selection uses the most restictive criteria supplied. 
     * 
     * 
     * Listing selection logically ANDs all options given. 
     * 
     * Time interval selection will prefer explicit start and end dates. If only one of startDate/endDate is supplied, this endpoint will use it 
     * as an anchor and look forward or backwards by the daysBack value. If neither is supplied endpoint will set endDate to today
     * and look back by the supplied daysBack value.
     * 
     * Maximum time interval is 45 days.
     * 
     * ExtendedSearch modifies the slice of listings returned. If false (default) it only returns vehicles satisfying lastSeen >= startDate and lastSeen < endDate.
     * If true it will return vehicles that were in dealer's inventory at any point between startDate and endDate including vehicles that were sold after endDate.
     * Setting extendedSearch to true will result in a slower response time. 
     * 
     * For example: If both a region name and dealer ID are supplied the dealer ID will be used because it is the most restrictive.
     * 
     * If a brandName of Ford and modelYear of 2019, modelName of F-150, and newCars of False is supplied this endpoint will return 
     * used 2019 model year Ford F-150s. If a contradictory listing selection is supplied (for example Ford + Camry) no listings will be returned
     * because the request matched no listings.
     * 
     * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
    **/
    public openapisdk.models.operations.GetListings2Listings2GetResponse getListings2Listings2Get(openapisdk.models.operations.GetListings2Listings2GetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/listings2");
        
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

        openapisdk.models.operations.GetListings2Listings2GetResponse res = new openapisdk.models.operations.GetListings2Listings2GetResponse() {{
            listingResp = null;
            httpValidationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListingResp out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListingResp.class);
                res.listingResp = out;
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
     * getListingsByDealerListingsByDateGet - Listings by Dealer ID and Date
     *
     * See /listings2 endpoint for more flexible listing search.
     * Returns a dealer's listings over the given timespan by dealer ID. The ID can be found by calling the /getDealers endpoint. 
     * Maximum time interval between startDate and endDate is 45 days.
     * Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
     * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
    **/
    public openapisdk.models.operations.GetListingsByDealerListingsByDateGetResponse getListingsByDealerListingsByDateGet(openapisdk.models.operations.GetListingsByDealerListingsByDateGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/listingsByDate");
        
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

        openapisdk.models.operations.GetListingsByDealerListingsByDateGetResponse res = new openapisdk.models.operations.GetListingsByDealerListingsByDateGetResponse() {{
            listingResp = null;
            httpValidationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListingResp out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListingResp.class);
                res.listingResp = out;
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
     * getListingsByDealerListingsGet - Listings by Dealer ID
     *
     * See /listings2 endpoint for more flexible listing search.
     * Returns a dealer's listings over the last 45 days by dealer ID. The ID can be found by calling the /getDealers endpoint. 
     * Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
     * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
    **/
    public openapisdk.models.operations.GetListingsByDealerListingsGetResponse getListingsByDealerListingsGet(openapisdk.models.operations.GetListingsByDealerListingsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/listings");
        
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

        openapisdk.models.operations.GetListingsByDealerListingsGetResponse res = new openapisdk.models.operations.GetListingsByDealerListingsGetResponse() {{
            listingResp = null;
            httpValidationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListingResp out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListingResp.class);
                res.listingResp = out;
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
     * getListingsByRegionAndDateListingsByRegionAndDateGet - Listings by Region and Date
     *
     * See /listings2 endpoint for more flexible listing search.
     * Returns listings active in a region in the given date range [startdate, endDate), or in other words dates that satisfy startDate <= X < endDate. Maximum range is 45 days 
     * Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
     * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
    **/
    public openapisdk.models.operations.GetListingsByRegionAndDateListingsByRegionAndDateGetResponse getListingsByRegionAndDateListingsByRegionAndDateGet(openapisdk.models.operations.GetListingsByRegionAndDateListingsByRegionAndDateGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/listingsByRegionAndDate");
        
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

        openapisdk.models.operations.GetListingsByRegionAndDateListingsByRegionAndDateGetResponse res = new openapisdk.models.operations.GetListingsByRegionAndDateListingsByRegionAndDateGetResponse() {{
            listingResp = null;
            httpValidationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListingResp out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListingResp.class);
                res.listingResp = out;
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
     * getListingsByRegionListingsByRegionGet - Listings by Region
     *
     * See /listings2 endpoint for more flexible listing search.
     * Returns a dealer's listings over up to the last 45 days by region. 
     * Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
     * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
    **/
    public openapisdk.models.operations.GetListingsByRegionListingsByRegionGetResponse getListingsByRegionListingsByRegionGet(openapisdk.models.operations.GetListingsByRegionListingsByRegionGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/listingsByRegion");
        
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

        openapisdk.models.operations.GetListingsByRegionListingsByRegionGetResponse res = new openapisdk.models.operations.GetListingsByRegionListingsByRegionGetResponse() {{
            listingResp = null;
            httpValidationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListingResp out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListingResp.class);
                res.listingResp = out;
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
     * getMarket3SimilarSalePriceGet - Premium. Simple Vehicle Market Report
     *
     * Premium. Provides the average, stdDev, and count, of the sale price and mileage of similar new and used vehicles in a given region based off the provided VIN. 
     * Optionally restricts report to vehicles of the same model year and goes back up to 120 days.
    **/
    public openapisdk.models.operations.GetMarket3SimilarSalePriceGetResponse getMarket3SimilarSalePriceGet(openapisdk.models.operations.GetMarket3SimilarSalePriceGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/similarSalePrice");
        
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

        openapisdk.models.operations.GetMarket3SimilarSalePriceGetResponse res = new openapisdk.models.operations.GetMarket3SimilarSalePriceGetResponse() {{
            similarSalePriceResp = null;
            httpValidationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SimilarSalePriceResp out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SimilarSalePriceResp.class);
                res.similarSalePriceResp = out;
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
     * getVehicleSeenVehicleSeenGet - Checks if a VIN appeared on the market on or after a given date.
     *
     * Checks our database to see if we have data on a VIN that appeared on the open market on or after the given date with a True/False response. 
     * This endpoint is more cost effective than the /vehicleHistory endpoint if your use case
     * requires searching a large list of vehicles with a low individual likelyhood of appearing on the open market. (For example searching for a specific stolen vehicle).
    **/
    public openapisdk.models.operations.GetVehicleSeenVehicleSeenGetResponse getVehicleSeenVehicleSeenGet(openapisdk.models.operations.GetVehicleSeenVehicleSeenGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/vehicleSeen");
        
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

        openapisdk.models.operations.GetVehicleSeenVehicleSeenGetResponse res = new openapisdk.models.operations.GetVehicleSeenVehicleSeenGetResponse() {{
            booleanResp = null;
            httpValidationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BooleanResp out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BooleanResp.class);
                res.booleanResp = out;
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
     * listingsByZipCodeAndDateListingsByZipCodeAndDateGet - Listings by ZipCode and Date
     *
     * See /listings2 endpoint for more flexible listing search.
     * Returns a dealer's listings over up to the last 45 days in the provided dealership's zip code. For example 92701.
     * Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
     * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
    **/
    public openapisdk.models.operations.ListingsByZipCodeAndDateListingsByZipCodeAndDateGetResponse listingsByZipCodeAndDateListingsByZipCodeAndDateGet(openapisdk.models.operations.ListingsByZipCodeAndDateListingsByZipCodeAndDateGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/listingsByZipCodeAndDate");
        
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

        openapisdk.models.operations.ListingsByZipCodeAndDateListingsByZipCodeAndDateGetResponse res = new openapisdk.models.operations.ListingsByZipCodeAndDateListingsByZipCodeAndDateGetResponse() {{
            listingResp = null;
            httpValidationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListingResp out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListingResp.class);
                res.listingResp = out;
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
     * listingsByZipCodeListingsByZipCodeGet - Listings by ZipCode
     *
     * See /listings2 endpoint for more flexible listing search.
     * Returns a dealer's listings over up to the last 45 days in the provided dealerhip's zip code. For example 92701.
     * Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
     * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
    **/
    public openapisdk.models.operations.ListingsByZipCodeListingsByZipCodeGetResponse listingsByZipCodeListingsByZipCodeGet(openapisdk.models.operations.ListingsByZipCodeListingsByZipCodeGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/listingsByZipCode");
        
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

        openapisdk.models.operations.ListingsByZipCodeListingsByZipCodeGetResponse res = new openapisdk.models.operations.ListingsByZipCodeListingsByZipCodeGetResponse() {{
            listingResp = null;
            httpValidationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListingResp out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListingResp.class);
                res.listingResp = out;
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
     * vinDecodeVinDecodeGet - Vin decoder and Recall Info
     *
     * Decodes the provided North American vin and provides recall information if available. 
     * We require at least the first 12 out of 17 characters in the vin to attempt a decode. The vin is not case sensitive.
     * If passEmpty (default False) is True we will also include the empty fields in the response json. 
     * If includeRecall (default True) is True we will include recall data reported to the NHTSA. Set False for a faster response.
    **/
    public openapisdk.models.operations.VinDecodeVinDecodeGetResponse vinDecodeVinDecodeGet(openapisdk.models.operations.VinDecodeVinDecodeGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/vinDecode");
        
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

        openapisdk.models.operations.VinDecodeVinDecodeGetResponse res = new openapisdk.models.operations.VinDecodeVinDecodeGetResponse() {{
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
	
}