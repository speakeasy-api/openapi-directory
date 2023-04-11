import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Ee {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Assigns a msisdn to a profile on ITV side.
     */
    assignMsisdn(req: operations.AssignMsisdnRequest, security: operations.AssignMsisdnSecurity, config?: AxiosRequestConfig): Promise<operations.AssignMsisdnResponse>;
    /**
     * Check whether or not a user is eligible for switching to Bt or EE offers.
     */
    checkEeBtEligibility(req: operations.CheckEeBtEligibilityRequest, security: operations.CheckEeBtEligibilitySecurity, config?: AxiosRequestConfig): Promise<operations.CheckEeBtEligibilityResponse>;
    /**
     * Creates a PIN request that will send an SMS to the given msisdn.
     * This call is to validate MSISDN entered by a user not comming through EE network.
     * This call should be followed by POST ee/pin.
     *
     */
    createPinRequest(req: operations.CreatePinRequestRequest, config?: AxiosRequestConfig): Promise<operations.CreatePinRequestResponse>;
    /**
     * Returns a token for later calls to EE API. TTL is one hour. Recommended is FE refreshes this token before each call.
     */
    createToken(config?: AxiosRequestConfig): Promise<operations.CreateTokenResponse>;
    /**
     * Returns eligible partner specific offers for the querying partner for an EE MSISDN.
     * This call is supposed to be called after we have MSISDN accired.
     * This call should be followed by POST /ee/msisdn.
     *
     */
    getEligibleOffers(req: operations.GetEligibleOffersRequest, config?: AxiosRequestConfig): Promise<operations.GetEligibleOffersResponse>;
    /**
     * Returns the plan description for EE flow including additional description data.
     */
    getPlan(req: operations.GetPlanRequest, config?: AxiosRequestConfig): Promise<operations.GetPlanResponse>;
    /**
     * Returns all the plans available for EE flow including additional description data.
     */
    getEePlans(req: operations.GetEePlansRequest, config?: AxiosRequestConfig): Promise<operations.GetEePlansResponse>;
    /**
     * Validate PIN request created by calling POST /ee/pin This call is to validate MSISDN entered by a user not comming through EE network. This call should be called after PUT /ee/pin. This call should be followed by POST /ee/offers.
     */
    validatePinRequest(req: operations.ValidatePinRequestRequest, config?: AxiosRequestConfig): Promise<operations.ValidatePinRequestResponse>;
}
