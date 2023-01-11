import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class InventoryTask {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createInventoryTask - This method creates an inventory-related download task for a specified feed type with optional filter criteria. When using this method, specify the feedType. This method returns the location response header containing the getInventoryTask call URI to retrieve the inventory task you just created. The URL includes the eBay-assigned task ID, which you can use to reference the inventory task. To retrieve the status of the task, use the getInventoryTask method to retrieve a single task ID or the getInventoryTasks method to retrieve multiple task IDs. Note: The scope depends on the feed type. An error message results when an unsupported scope or feed type is specified.Presently, this method supports Active Inventory Report. The ActiveInventoryReport returns a report that contains price and quantity information for all of the active listings for a specific seller. A seller can use this information to maintain their inventory on eBay.
    **/
    createInventoryTask(req: operations.CreateInventoryTaskRequest, config?: AxiosRequestConfig): Promise<operations.CreateInventoryTaskResponse>;
    /**
     * getInventoryTask - This method retrieves the task details and status of the specified inventory-related task. The input is task_id.
    **/
    getInventoryTask(req: operations.GetInventoryTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetInventoryTaskResponse>;
    /**
     * getInventoryTasks - This method searches for multiple tasks of a specific feed type, and includes date filters and pagination.
    **/
    getInventoryTasks(req: operations.GetInventoryTasksRequest, config?: AxiosRequestConfig): Promise<operations.GetInventoryTasksResponse>;
}
