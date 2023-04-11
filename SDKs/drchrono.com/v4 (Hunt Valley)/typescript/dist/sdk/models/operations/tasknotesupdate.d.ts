import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TaskNotesUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class TaskNotesUpdateRequest extends SpeakeasyBase {
    id: string;
    since?: string;
    task?: number;
}
export declare class TaskNotesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
