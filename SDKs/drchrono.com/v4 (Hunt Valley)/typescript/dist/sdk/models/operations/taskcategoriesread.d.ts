import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TaskCategoriesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class TaskCategoriesReadRequest extends SpeakeasyBase {
    id: string;
    since?: string;
}
export declare class TaskCategoriesReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskCategory?: shared.TaskCategory;
}
