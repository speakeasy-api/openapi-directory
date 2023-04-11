import { CarCachedImage } from "./carcachedimage";
import { CarSearch } from "./carsearch";
import { CarsHistoryAPI } from "./carshistoryapi";
import { CarsMarketAPI } from "./carsmarketapi";
import { ClientFilters } from "./clientfilters";
import { CRMCleanseAPI } from "./crmcleanseapi";
import { DealerAPI } from "./dealerapi";
import { HeavyEquipmentSearch } from "./heavyequipmentsearch";
import * as shared from "./models/shared";
import { MotorcycleSearch } from "./motorcyclesearch";
import { OEMIncentiveSearch } from "./oemincentivesearch";
import { RankCarListings } from "./rankcarlistings";
import { RecallSearch } from "./recallsearch";
import { RVSearch } from "./rvsearch";
import { VINDecoderAPI } from "./vindecoderapi";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://marketcheck-prod.apigee.net/v2"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * One API serving data spanned across multiple verticals
 */
export declare class SDK {
    crmCleanseAPI: CRMCleanseAPI;
    carCachedImage: CarCachedImage;
    carSearch: CarSearch;
    carsHistoryAPI: CarsHistoryAPI;
    carsMarketAPI: CarsMarketAPI;
    dealerAPI: DealerAPI;
    heavyEquipmentSearch: HeavyEquipmentSearch;
    motorcycleSearch: MotorcycleSearch;
    oemIncentiveSearch: OEMIncentiveSearch;
    rvSearch: RVSearch;
    rankCarListings: RankCarListings;
    recallSearch: RecallSearch;
    vinDecoderAPI: VINDecoderAPI;
    clientFilters: ClientFilters;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
