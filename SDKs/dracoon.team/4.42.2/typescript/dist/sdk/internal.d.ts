import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Internal non-public APIs
 */
export declare class Internal {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Request subscription plan
     *
     * @remarks
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.36.0</h3>
     *
     * ### Description:
     * Get the subscription plan id of the current tenant
     *
     * ### Precondition:
     * Valid `X-SDS-Service-Token` Header
     *
     * ### Postcondition:
     * Returns SubscriptionPlanResponse model that includes subscription plan id.
     *
     * ### Further Information:
     * None.
     *
     */
    internalRequestSubscriptionPlan(req: operations.InternalRequestSubscriptionPlanRequest, config?: AxiosRequestConfig): Promise<operations.InternalRequestSubscriptionPlanResponse>;
    /**
     * Set subscription plan
     *
     * @remarks
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.36.0</h3>
     *
     * ### Description:
     * Change the subscription plan id of the current tenant
     *
     * ### Precondition:
     * Valid `X-SDS-Service-Token` Header
     *
     * ### Postcondition:
     * The subscription plan of the current tenant is set to the given value.
     * Returns SubscriptionPlanResponse model that includes subscription plan id.
     *
     * ### Further Information:
     * None.
     *
     */
    internalSetSubscriptionPlan(req: operations.InternalSetSubscriptionPlanRequest, config?: AxiosRequestConfig): Promise<operations.InternalSetSubscriptionPlanResponse>;
}
