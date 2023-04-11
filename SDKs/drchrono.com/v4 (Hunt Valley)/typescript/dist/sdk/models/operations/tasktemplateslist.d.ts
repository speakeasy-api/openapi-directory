import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TaskTemplatesListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class TaskTemplatesListRequest extends SpeakeasyBase {
    assigneeGroup?: number;
    assigneeUser?: number;
    category?: number;
    cursor?: string;
    pageSize?: number;
    since?: string;
    status?: number;
}
/**
 * Paginated Result
 */
export declare class TaskTemplatesList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.TaskTemplate[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class TaskTemplatesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskTemplatesList200ApplicationJSONObject?: TaskTemplatesList200ApplicationJSON;
}
