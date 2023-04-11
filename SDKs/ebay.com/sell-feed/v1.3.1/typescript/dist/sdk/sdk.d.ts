import { CustomerServiceMetricTask } from "./customerservicemetrictask";
import { InventoryTask } from "./inventorytask";
import { OrderTask } from "./ordertask";
import { Schedule } from "./schedule";
import { Task } from "./task";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.ebay.com{basePath}"];
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
/**
 * <p>The <strong>Feed API</strong> lets sellers upload input files, download reports and files including their status, filter reports using URI parameters, and retrieve customer service metrics task details.</p>
 */
export declare class SDK {
    customerServiceMetricTask: CustomerServiceMetricTask;
    inventoryTask: InventoryTask;
    orderTask: OrderTask;
    schedule: Schedule;
    task: Task;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
