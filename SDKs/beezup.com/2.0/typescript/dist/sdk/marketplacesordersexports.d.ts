import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MarketplacesOrdersExports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Request a new Order report exportation to be generated
     *
     * @remarks
     * A new file will be generated containing a summary of all the Orders matching the requested filter settings.
     */
    exportOrders(req: shared.ExportOrderListRequest, config?: AxiosRequestConfig): Promise<operations.ExportOrdersResponse>;
    /**
     * Get a paginated list of Order report exportations
     */
    getOrderExportations(req: operations.GetOrderExportationsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrderExportationsResponse>;
}
