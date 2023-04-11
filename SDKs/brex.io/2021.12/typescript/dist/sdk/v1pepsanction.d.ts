import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Pep Sanction Check methods
 */
export declare class V1Pepsanction {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves a list of monitor entries
     *
     * @remarks
     * Retrieve a list of all active Pep Sanction Report monitors for this account
     */
    pepMonitorList(config?: AxiosRequestConfig): Promise<operations.PepMonitorListResponse>;
    /**
     * Deactive a pep sanction monitor
     *
     * @remarks
     * Unregister a previously created Pep Sanction Report Monitor
     */
    pepMonitorUnregister(req: operations.PepMonitorUnregisterRequest, security: operations.PepMonitorUnregisterSecurity, config?: AxiosRequestConfig): Promise<operations.PepMonitorUnregisterResponse>;
    /**
     * Update details of active Pep Sanction monitor
     *
     * @remarks
     * Update the webhook URL of an active Pep Sanction Report Monitor
     */
    pepMonitorUpdate(req: operations.PepMonitorUpdateRequest, security: operations.PepMonitorUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PepMonitorUpdateResponse>;
    /**
     * Orders a new Pep Sanction Check Report
     *
     * @remarks
     * Order a new Pep Sanction Check by providing either a business or person name with some additional optional parameters.
     */
    pepOrder(req: operations.PepOrderRequest, security: operations.PepOrderSecurity, config?: AxiosRequestConfig): Promise<operations.PepOrderResponse>;
    /**
     * Returns a json or pdf report
     *
     * @remarks
     * Retrieve a completed Pep Sanction check structured or in pdf depending on given accept header
     */
    pepRetrieve(req: operations.PepRetrieveRequest, security: operations.PepRetrieveSecurity, config?: AxiosRequestConfig): Promise<operations.PepRetrieveResponse>;
}
