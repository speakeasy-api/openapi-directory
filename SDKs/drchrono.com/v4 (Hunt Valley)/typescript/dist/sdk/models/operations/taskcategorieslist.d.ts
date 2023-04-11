import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TaskCategoriesListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class TaskCategoriesListRequest extends SpeakeasyBase {
    cursor?: string;
    pageSize?: number;
    since?: string;
}
/**
 * Paginated Result
 */
export declare class TaskCategoriesList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.TaskCategory[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class TaskCategoriesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskCategoriesList200ApplicationJSONObject?: TaskCategoriesList200ApplicationJSON;
}
