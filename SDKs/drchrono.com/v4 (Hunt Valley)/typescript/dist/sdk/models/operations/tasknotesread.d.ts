import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TaskNotesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class TaskNotesReadRequest extends SpeakeasyBase {
    id: string;
    since?: string;
    task?: number;
}
export declare class TaskNotesReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskNote?: shared.TaskNote;
}
