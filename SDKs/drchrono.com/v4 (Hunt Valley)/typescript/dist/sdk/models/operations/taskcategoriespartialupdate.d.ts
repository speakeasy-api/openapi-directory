import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TaskCategoriesPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class TaskCategoriesPartialUpdateRequest extends SpeakeasyBase {
    id: string;
    since?: string;
}
export declare class TaskCategoriesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
