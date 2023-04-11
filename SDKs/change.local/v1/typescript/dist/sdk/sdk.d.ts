import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://change.local", "https://{defaultHost}"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Calculate shipping carbon offset
     *
     * @remarks
     * Calculates the donation amount (to CarbonFund 501\(c\)3) needed to offset a physical shipment. This calculation depends on the weight, primary transportation method, and distance of the shipment. Provide the distance of the shipment using the origin and destination address, or directly with the number of miles. For convenience, this endpoint also returns the id of the nonprofit CarbonFund, for making a subsequent donation to. See the [Carbon offsets guide](/recipes/carbon-offsets/) for more on using this endpoint.
     */
    getApiV1DonationsCarbonCalculate(req: operations.GetApiV1DonationsCarbonCalculateRequest, security: operations.GetApiV1DonationsCarbonCalculateSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1DonationsCarbonCalculateResponse>;
    /**
     * Retrieve carbon offset stats
     *
     * @remarks
     * Measures your carbon offset impact in relatable terms. Provide the id of a donation to CarbonFund to see stats about that specific donation. If you omit the donation id, this endpoint returns aggregate stats for all of your CarbonFund donations.
     */
    getApiV1DonationsCarbonStats(req: operations.GetApiV1DonationsCarbonStatsRequest, security: operations.GetApiV1DonationsCarbonStatsSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1DonationsCarbonStatsResponse>;
    /**
     * Calculate crypto carbon offset
     *
     * @remarks
     * Calculates the donation amount (to CarbonFund 501\(c\)3) needed to offset a cryptocurrency transaction. For convenience, this endpoint also returns the id of the nonprofit CarbonFund, for making a subsequent donation to. See the [Carbon offsets guide](/recipes/carbon-offsets/) for more on using this endpoint.
     */
    getApiV1DonationsCryptoCalculate(req: operations.GetApiV1DonationsCryptoCalculateRequest, security: operations.GetApiV1DonationsCryptoCalculateSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1DonationsCryptoCalculateResponse>;
    /**
     * List your donations
     *
     * @remarks
     * Retrieves a list of donations you've previously made. The donations are returned in order of creation, with the most recent donations appearing first. This endpoint is paginated.
     */
    getApiV1DonationsIndex(req: operations.GetApiV1DonationsIndexRequest, security: operations.GetApiV1DonationsIndexSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1DonationsIndexResponse>;
    /**
     * Retrieve a donation
     *
     * @remarks
     * Retrieves the details of a donation you've previously made.
     */
    getApiV1DonationsShow(req: operations.GetApiV1DonationsShowRequest, security: operations.GetApiV1DonationsShowSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1DonationsShowResponse>;
    /**
     * Search a nonprofit
     *
     * @remarks
     * Retrieves a list of nonprofits whose names match the provided name. This endpoint is paginated.
     */
    getApiV1NonprofitsList(req: operations.GetApiV1NonprofitsListRequest, security: operations.GetApiV1NonprofitsListSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1NonprofitsListResponse>;
    /**
     * Show a nonprofit
     *
     * @remarks
     * Retrieves information for a nonprofit.
     */
    getApiV1NonprofitsShow(req: operations.GetApiV1NonprofitsShowRequest, security: operations.GetApiV1NonprofitsShowSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1NonprofitsShowResponse>;
    /**
     * Create a donation
     *
     * @remarks
     * Creates a donation to any nonprofit. CHANGE keeps track of your donations, bills you at the end of the month, and handles the nonprofit payouts for you.
     */
    postApiV1DonationsCreate(req: operations.PostApiV1DonationsCreateRequest, security: operations.PostApiV1DonationsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1DonationsCreateResponse>;
}
