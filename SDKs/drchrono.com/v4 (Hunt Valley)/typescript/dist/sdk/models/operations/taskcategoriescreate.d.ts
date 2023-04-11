import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TaskCategoriesCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class TaskCategoriesCreateRequest extends SpeakeasyBase {
    since?: string;
}
export declare class TaskCategoriesCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    taskCategory?: shared.TaskCategory;
}
