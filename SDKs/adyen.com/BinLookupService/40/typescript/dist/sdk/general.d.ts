import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class General {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Check if 3D Secure is available
     *
     * @remarks
     * Verifies whether 3D Secure is available for the specified BIN or card brand. For 3D Secure 2, this endpoint also returns device fingerprinting keys.
     *
     * For more information, refer to [3D Secure 2](https://docs.adyen.com/online-payments/3d-secure/native-3ds2).
     */
    postGet3dsAvailability(req: shared.ThreeDSAvailabilityRequest, security: operations.PostGet3dsAvailabilitySecurity, config?: AxiosRequestConfig): Promise<operations.PostGet3dsAvailabilityResponse>;
    /**
     * Get a fees cost estimate
     *
     * @remarks
     * >This API is available only for merchants operating in Australia, the EU, and the UK.
     *
     * Use the Adyen Cost Estimation API to pre-calculate interchange and scheme fee costs. Knowing these costs prior actual payment authorisation gives you an opportunity to charge those costs to the cardholder, if necessary.
     *
     * To retrieve this information, make the call to the `/getCostEstimate` endpoint. The response to this call contains the amount of the interchange and scheme fees charged by the network for this transaction, and also which surcharging policy is possible (based on current regulations).
     *
     * > Since not all information is known in advance (for example, if the cardholder will successfully authenticate via 3D Secure or if you also plan to provide additional Level 2/3 data), the returned amounts are based on a set of assumption criteria you define in the `assumptions` parameter.
     */
    postGetCostEstimate(req: shared.CostEstimateRequest, security: operations.PostGetCostEstimateSecurity, config?: AxiosRequestConfig): Promise<operations.PostGetCostEstimateResponse>;
}
