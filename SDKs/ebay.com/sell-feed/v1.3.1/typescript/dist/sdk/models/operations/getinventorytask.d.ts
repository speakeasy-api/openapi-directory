import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetInventoryTaskSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetInventoryTaskRequest extends SpeakeasyBase {
    /**
     * The ID of the task. This ID was generated when the task was created by the <strong>createInventoryTask</strong> method
     */
    taskId: string;
}
export declare class GetInventoryTaskResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    inventoryTask?: shared.InventoryTask;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
