import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class InventoryTask {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * This method creates an inventory-related download task for a specified feed type with optional filter criteria. When using this method, specify the <strong>feedType</strong>. <br/><br/>This method returns the location response header containing the <strong>getInventoryTask</strong> call URI to retrieve the inventory task you just created. The URL includes the eBay-assigned task ID, which you can use to reference the inventory task.<br/><br/>To retrieve the status of the task, use the <strong>getInventoryTask</strong> method to retrieve a single task ID or the <strong>getInventoryTasks</strong> method to retrieve multiple task IDs.<p> <span class="tablenote"><strong>Note:</strong> The scope depends on the feed type. An error message results when an unsupported scope or feed type is specified.</span></p>Presently, this method supports Active Inventory Report. The <strong>ActiveInventoryReport</strong> returns a report that contains price and quantity information for all of the active listings for a specific seller. A seller can use this information to maintain their inventory on eBay.
     */
    createInventoryTask(req: shared.CreateInventoryTaskRequest, security: operations.CreateInventoryTaskSecurity, config?: AxiosRequestConfig): Promise<operations.CreateInventoryTaskResponse>;
    /**
     * This method retrieves the task details and status of the specified inventory-related task. The input is <strong>task_id</strong>.
     */
    getInventoryTask(req: operations.GetInventoryTaskRequest, security: operations.GetInventoryTaskSecurity, config?: AxiosRequestConfig): Promise<operations.GetInventoryTaskResponse>;
    /**
     * This method searches for multiple tasks of a specific feed type, and includes date filters and pagination.
     */
    getInventoryTasks(req: operations.GetInventoryTasksRequest, security: operations.GetInventoryTasksSecurity, config?: AxiosRequestConfig): Promise<operations.GetInventoryTasksResponse>;
}
