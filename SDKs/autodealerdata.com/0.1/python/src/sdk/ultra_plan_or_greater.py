import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class UltraPlanOrGreater:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def get_dealer_sales_region_daily_sales_get(self, request: operations.GetDealerSalesRegionDailySalesGetRequest) -> operations.GetDealerSalesRegionDailySalesGetResponse:
        r"""Brand sales by region and Day
        Get regional sales by brand and day. Most recent data is typically only 2 days old for this endpoint.
            
        The Day field is in YYYY-MM-DD format. For example if you wanted sales data from April 5th of 2020 the day field would be '2020-04-05'
        
        Data availability depends on region and goes back up to 2016.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/regionDailySales"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDealerSalesRegionDailySalesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenericResponse])
                res.generic_response = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_dealer_sales_region_sales_get(self, request: operations.GetDealerSalesRegionSalesGetRequest) -> operations.GetDealerSalesRegionSalesGetResponse:
        r"""Premium. Brand sales by region and month
        Premium. Get regional sales by brand and month, broken down by day. Most recent data is typically only 2 days old for this endpoint.
            
        The month field is in YYYY-MM-DD format. For example if you wanted sales data from April of 2020 the month field would be '2020-04-01'
        
        Data availability depends on region and goes back up to 2016.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/regionSales"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDealerSalesRegionSalesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenericResponse])
                res.generic_response = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_listings2_listings2_get(self, request: operations.GetListings2Listings2GetRequest) -> operations.GetListings2Listings2GetResponse:
        r"""Flexible Listing Search
        Generic getter for listings supporting a wide array of selection criteria. This is the new primary listing endpoint and we will phase out the older listing endpoints over time.
        The other listing endpoints return the same data, but are more restrictive in the available geographic and vehicle selection criteria.
        
        Dealer selection uses the most restictive criteria supplied. 
        
        
        Listing selection logically ANDs all options given. 
        
        Time interval selection will prefer explicit start and end dates. If only one of startDate/endDate is supplied, this endpoint will use it 
        as an anchor and look forward or backwards by the daysBack value. If neither is supplied endpoint will set endDate to today
        and look back by the supplied daysBack value.
        
        Maximum time interval is 45 days.
        
        ExtendedSearch modifies the slice of listings returned. If false (default) it only returns vehicles satisfying lastSeen >= startDate and lastSeen < endDate.
        If true it will return vehicles that were in dealer's inventory at any point between startDate and endDate including vehicles that were sold after endDate.
        Setting extendedSearch to true will result in a slower response time. 
        
        For example: If both a region name and dealer ID are supplied the dealer ID will be used because it is the most restrictive.
        
        If a brandName of Ford and modelYear of 2019, modelName of F-150, and newCars of False is supplied this endpoint will return 
        used 2019 model year Ford F-150s. If a contradictory listing selection is supplied (for example Ford + Camry) no listings will be returned
        because the request matched no listings.
        
        Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listings2"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListings2Listings2GetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingResp])
                res.listing_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_listings_by_dealer_listings_by_date_get(self, request: operations.GetListingsByDealerListingsByDateGetRequest) -> operations.GetListingsByDealerListingsByDateGetResponse:
        r"""Listings by Dealer ID and Date
        See /listings2 endpoint for more flexible listing search.
        Returns a dealer's listings over the given timespan by dealer ID. The ID can be found by calling the /getDealers endpoint. 
        Maximum time interval between startDate and endDate is 45 days.
        Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
        Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listingsByDate"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingsByDealerListingsByDateGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingResp])
                res.listing_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_listings_by_dealer_listings_get(self, request: operations.GetListingsByDealerListingsGetRequest) -> operations.GetListingsByDealerListingsGetResponse:
        r"""Listings by Dealer ID
        See /listings2 endpoint for more flexible listing search.
        Returns a dealer's listings over the last 45 days by dealer ID. The ID can be found by calling the /getDealers endpoint. 
        Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
        Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listings"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingsByDealerListingsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingResp])
                res.listing_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_listings_by_region_and_date_listings_by_region_and_date_get(self, request: operations.GetListingsByRegionAndDateListingsByRegionAndDateGetRequest) -> operations.GetListingsByRegionAndDateListingsByRegionAndDateGetResponse:
        r"""Listings by Region and Date
        See /listings2 endpoint for more flexible listing search.
        Returns listings active in a region in the given date range [startdate, endDate), or in other words dates that satisfy startDate <= X < endDate. Maximum range is 45 days 
        Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
        Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listingsByRegionAndDate"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingsByRegionAndDateListingsByRegionAndDateGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingResp])
                res.listing_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_listings_by_region_listings_by_region_get(self, request: operations.GetListingsByRegionListingsByRegionGetRequest) -> operations.GetListingsByRegionListingsByRegionGetResponse:
        r"""Listings by Region
        See /listings2 endpoint for more flexible listing search.
        Returns a dealer's listings over up to the last 45 days by region. 
        Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
        Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listingsByRegion"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingsByRegionListingsByRegionGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingResp])
                res.listing_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_region_brand_market_share_get_region_brand_market_share_get(self, request: operations.GetRegionBrandMarketShareGetRegionBrandMarketShareGetRequest) -> operations.GetRegionBrandMarketShareGetRegionBrandMarketShareGetResponse:
        r"""Market share of a brand in region
        Market share of a given brand in a given region by number of vehicles sold over the last 45 days.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getRegionBrandMarketShare"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRegionBrandMarketShareGetRegionBrandMarketShareGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenericResponse])
                res.generic_response = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_region_market_share_get_region_market_share_get(self, request: operations.GetRegionMarketShareGetRegionMarketShareGetRequest) -> operations.GetRegionMarketShareGetRegionMarketShareGetResponse:
        r"""Market share of all brands in region
        Market share of a all brands in a given region by number of vehicles sold over the last 45 days.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getRegionMarketShare"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRegionMarketShareGetRegionMarketShareGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenericResponse])
                res.generic_response = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_vehicle_seen_vehicle_seen_get(self, request: operations.GetVehicleSeenVehicleSeenGetRequest) -> operations.GetVehicleSeenVehicleSeenGetResponse:
        r"""Checks if a VIN appeared on the market on or after a given date.
        Checks our database to see if we have data on a VIN that appeared on the open market on or after the given date with a True/False response. 
        This endpoint is more cost effective than the /vehicleHistory endpoint if your use case
        requires searching a large list of vehicles with a low individual likelyhood of appearing on the open market. (For example searching for a specific stolen vehicle).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/vehicleSeen"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVehicleSeenVehicleSeenGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BooleanResp])
                res.boolean_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def listings_by_zip_code_and_date_listings_by_zip_code_and_date_get(self, request: operations.ListingsByZipCodeAndDateListingsByZipCodeAndDateGetRequest) -> operations.ListingsByZipCodeAndDateListingsByZipCodeAndDateGetResponse:
        r"""Listings by ZipCode and Date
        See /listings2 endpoint for more flexible listing search.
        Returns a dealer's listings over up to the last 45 days in the provided dealership's zip code. For example 92701.
        Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
        Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listingsByZipCodeAndDate"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListingsByZipCodeAndDateListingsByZipCodeAndDateGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingResp])
                res.listing_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def listings_by_zip_code_listings_by_zip_code_get(self, request: operations.ListingsByZipCodeListingsByZipCodeGetRequest) -> operations.ListingsByZipCodeListingsByZipCodeGetResponse:
        r"""Listings by ZipCode
        See /listings2 endpoint for more flexible listing search.
        Returns a dealer's listings over up to the last 45 days in the provided dealerhip's zip code. For example 92701.
        Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
        Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listingsByZipCode"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListingsByZipCodeListingsByZipCodeGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingResp])
                res.listing_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    