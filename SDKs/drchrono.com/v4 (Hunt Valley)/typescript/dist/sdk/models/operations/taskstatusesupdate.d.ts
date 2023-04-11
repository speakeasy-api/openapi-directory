import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TaskStatusesUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class TaskStatusesUpdateRequest extends SpeakeasyBase {
    id: string;
    since?: string;
}
export declare class TaskStatusesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
