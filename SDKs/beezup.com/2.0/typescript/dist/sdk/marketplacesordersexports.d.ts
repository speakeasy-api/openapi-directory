import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class MarketplacesOrdersExports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * exportOrders - Request a new Order report exportation to be generated
     *
     * A new file will be generated containing a summary of all the Orders matching the requested filter settings.
    **/
    exportOrders(req: operations.ExportOrdersRequest, config?: AxiosRequestConfig): Promise<operations.ExportOrdersResponse>;
    /**
     * getOrderExportations - Get a paginated list of Order report exportations
    **/
    getOrderExportations(req: operations.GetOrderExportationsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrderExportationsResponse>;
}
