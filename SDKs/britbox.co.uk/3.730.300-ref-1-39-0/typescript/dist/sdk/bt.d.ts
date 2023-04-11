import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Bt {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Assigns an UserToken to a profile on the ITV side. Currently throws an exception.
     */
    assignToken(req: operations.AssignTokenRequest, security: operations.AssignTokenSecurity, config?: AxiosRequestConfig): Promise<operations.AssignTokenResponse>;
    /**
     * Check whether or not a user is eligible for switching to Bt or EE offers.
     */
    checkEeBtEligibility(req: operations.CheckEeBtEligibilityRequest, security: operations.CheckEeBtEligibilitySecurity, config?: AxiosRequestConfig): Promise<operations.CheckEeBtEligibilityResponse>;
    /**
     * Checks a provided token for BT eligible user.
     *
     */
    checkUserToken(req: operations.CheckUserTokenRequest, config?: AxiosRequestConfig): Promise<operations.CheckUserTokenResponse>;
    /**
     * Returns all the plans available for BT flow including additional description data.
     */
    getPlanByToken(req: operations.GetPlanByTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetPlanByTokenResponse>;
    /**
     * Returns all the plans available for BT flow including additional description data.
     */
    getPlans(req: operations.GetPlansRequest, config?: AxiosRequestConfig): Promise<operations.GetPlansResponse>;
}
