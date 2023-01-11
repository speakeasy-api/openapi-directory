import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UltraPlanOrGreater {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDealerSalesRegionDailySalesGet - Brand sales by region and Day
     *
     * Get regional sales by brand and day. Most recent data is typically only 2 days old for this endpoint.
     *
     * The Day field is in YYYY-MM-DD format. For example if you wanted sales data from April 5th of 2020 the day field would be '2020-04-05'
     *
     * Data availability depends on region and goes back up to 2016.
    **/
    getDealerSalesRegionDailySalesGet(req: operations.GetDealerSalesRegionDailySalesGetRequest, config?: AxiosRequestConfig): Promise<operations.GetDealerSalesRegionDailySalesGetResponse>;
    /**
     * getDealerSalesRegionSalesGet - Premium. Brand sales by region and month
     *
     * Premium. Get regional sales by brand and month, broken down by day. Most recent data is typically only 2 days old for this endpoint.
     *
     * The month field is in YYYY-MM-DD format. For example if you wanted sales data from April of 2020 the month field would be '2020-04-01'
     *
     * Data availability depends on region and goes back up to 2016.
    **/
    getDealerSalesRegionSalesGet(req: operations.GetDealerSalesRegionSalesGetRequest, config?: AxiosRequestConfig): Promise<operations.GetDealerSalesRegionSalesGetResponse>;
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
    getListings2Listings2Get(req: operations.GetListings2Listings2GetRequest, config?: AxiosRequestConfig): Promise<operations.GetListings2Listings2GetResponse>;
    /**
     * getListingsByDealerListingsByDateGet - Listings by Dealer ID and Date
     *
     * See /listings2 endpoint for more flexible listing search.
     * Returns a dealer's listings over the given timespan by dealer ID. The ID can be found by calling the /getDealers endpoint.
     * Maximum time interval between startDate and endDate is 45 days.
     * Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
     * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
    **/
    getListingsByDealerListingsByDateGet(req: operations.GetListingsByDealerListingsByDateGetRequest, config?: AxiosRequestConfig): Promise<operations.GetListingsByDealerListingsByDateGetResponse>;
    /**
     * getListingsByDealerListingsGet - Listings by Dealer ID
     *
     * See /listings2 endpoint for more flexible listing search.
     * Returns a dealer's listings over the last 45 days by dealer ID. The ID can be found by calling the /getDealers endpoint.
     * Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
     * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
    **/
    getListingsByDealerListingsGet(req: operations.GetListingsByDealerListingsGetRequest, config?: AxiosRequestConfig): Promise<operations.GetListingsByDealerListingsGetResponse>;
    /**
     * getListingsByRegionAndDateListingsByRegionAndDateGet - Listings by Region and Date
     *
     * See /listings2 endpoint for more flexible listing search.
     * Returns listings active in a region in the given date range [startdate, endDate), or in other words dates that satisfy startDate <= X < endDate. Maximum range is 45 days
     * Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
     * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
    **/
    getListingsByRegionAndDateListingsByRegionAndDateGet(req: operations.GetListingsByRegionAndDateListingsByRegionAndDateGetRequest, config?: AxiosRequestConfig): Promise<operations.GetListingsByRegionAndDateListingsByRegionAndDateGetResponse>;
    /**
     * getListingsByRegionListingsByRegionGet - Listings by Region
     *
     * See /listings2 endpoint for more flexible listing search.
     * Returns a dealer's listings over up to the last 45 days by region.
     * Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
     * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
    **/
    getListingsByRegionListingsByRegionGet(req: operations.GetListingsByRegionListingsByRegionGetRequest, config?: AxiosRequestConfig): Promise<operations.GetListingsByRegionListingsByRegionGetResponse>;
    /**
     * getRegionBrandMarketShareGetRegionBrandMarketShareGet - Market share of a brand in region
     *
     * Market share of a given brand in a given region by number of vehicles sold over the last 45 days.
    **/
    getRegionBrandMarketShareGetRegionBrandMarketShareGet(req: operations.GetRegionBrandMarketShareGetRegionBrandMarketShareGetRequest, config?: AxiosRequestConfig): Promise<operations.GetRegionBrandMarketShareGetRegionBrandMarketShareGetResponse>;
    /**
     * getRegionMarketShareGetRegionMarketShareGet - Market share of all brands in region
     *
     * Market share of a all brands in a given region by number of vehicles sold over the last 45 days.
    **/
    getRegionMarketShareGetRegionMarketShareGet(req: operations.GetRegionMarketShareGetRegionMarketShareGetRequest, config?: AxiosRequestConfig): Promise<operations.GetRegionMarketShareGetRegionMarketShareGetResponse>;
    /**
     * getVehicleSeenVehicleSeenGet - Checks if a VIN appeared on the market on or after a given date.
     *
     * Checks our database to see if we have data on a VIN that appeared on the open market on or after the given date with a True/False response.
     * This endpoint is more cost effective than the /vehicleHistory endpoint if your use case
     * requires searching a large list of vehicles with a low individual likelyhood of appearing on the open market. (For example searching for a specific stolen vehicle).
    **/
    getVehicleSeenVehicleSeenGet(req: operations.GetVehicleSeenVehicleSeenGetRequest, config?: AxiosRequestConfig): Promise<operations.GetVehicleSeenVehicleSeenGetResponse>;
    /**
     * listingsByZipCodeAndDateListingsByZipCodeAndDateGet - Listings by ZipCode and Date
     *
     * See /listings2 endpoint for more flexible listing search.
     * Returns a dealer's listings over up to the last 45 days in the provided dealership's zip code. For example 92701.
     * Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
     * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
    **/
    listingsByZipCodeAndDateListingsByZipCodeAndDateGet(req: operations.ListingsByZipCodeAndDateListingsByZipCodeAndDateGetRequest, config?: AxiosRequestConfig): Promise<operations.ListingsByZipCodeAndDateListingsByZipCodeAndDateGetResponse>;
    /**
     * listingsByZipCodeListingsByZipCodeGet - Listings by ZipCode
     *
     * See /listings2 endpoint for more flexible listing search.
     * Returns a dealer's listings over up to the last 45 days in the provided dealerhip's zip code. For example 92701.
     * Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
     * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
    **/
    listingsByZipCodeListingsByZipCodeGet(req: operations.ListingsByZipCodeListingsByZipCodeGetRequest, config?: AxiosRequestConfig): Promise<operations.ListingsByZipCodeListingsByZipCodeGetResponse>;
}
