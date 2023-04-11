import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TaskCategoriesUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class TaskCategoriesUpdateRequest extends SpeakeasyBase {
    id: string;
    since?: string;
}
export declare class TaskCategoriesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
