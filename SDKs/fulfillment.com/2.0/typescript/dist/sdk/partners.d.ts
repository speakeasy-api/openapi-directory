import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Partners {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Ship an Order
     *
     * @remarks
     * Note, this API is used to update orders and is reserved for our shipping partners.
     */
    putOrdersIdShip(req: operations.PutOrdersIdShipRequest, security: operations.PutOrdersIdShipSecurity, config?: AxiosRequestConfig): Promise<operations.PutOrdersIdShipResponse>;
    /**
     * Update Order Status
     *
     * @remarks
     * Note, this API is used to update orders and is reserved for our shipping partners.
     */
    putOrdersIdStatus(req: operations.PutOrdersIdStatusRequest, security: operations.PutOrdersIdStatusSecurity, config?: AxiosRequestConfig): Promise<operations.PutOrdersIdStatusResponse>;
}
