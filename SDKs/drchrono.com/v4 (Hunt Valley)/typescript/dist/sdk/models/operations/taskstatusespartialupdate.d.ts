import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TaskStatusesPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class TaskStatusesPartialUpdateRequest extends SpeakeasyBase {
    id: string;
    since?: string;
}
export declare class TaskStatusesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
