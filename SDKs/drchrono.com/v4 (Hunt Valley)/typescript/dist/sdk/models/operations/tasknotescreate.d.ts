import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TaskNotesCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class TaskNotesCreateRequest extends SpeakeasyBase {
    since?: string;
    task?: number;
}
export declare class TaskNotesCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    taskNote?: shared.TaskNote;
}
