import { AxiosInstance } from "axios";
import { CustomerServiceMetricTask } from "./customerservicemetrictask";
import { InventoryTask } from "./inventorytask";
import { OrderTask } from "./ordertask";
import { Schedule } from "./schedule";
import { Task } from "./task";
export declare const ServerList: readonly ["https://api.ebay.com{basePath}"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
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
    constructor(props: SDKProps);
}
