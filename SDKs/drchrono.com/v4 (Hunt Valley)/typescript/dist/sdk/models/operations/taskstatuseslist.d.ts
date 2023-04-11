import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TaskStatusesListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class TaskStatusesListRequest extends SpeakeasyBase {
    cursor?: string;
    pageSize?: number;
    since?: string;
}
/**
 * Paginated Result
 */
export declare class TaskStatusesList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.TaskStatus[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class TaskStatusesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskStatusesList200ApplicationJSONObject?: TaskStatusesList200ApplicationJSON;
}
