import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TaskNotesPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class TaskNotesPartialUpdateRequest extends SpeakeasyBase {
    id: string;
    since?: string;
    task?: number;
}
export declare class TaskNotesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
