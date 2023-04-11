import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOrderTaskSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetOrderTaskRequest extends SpeakeasyBase {
    /**
     * The ID of the task. This ID is generated when the task was created by the <b> createOrderTask</b> method.
     */
    taskId: string;
}
export declare class GetOrderTaskResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    orderTask?: shared.OrderTask;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
