import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetLatestResultFileSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetLatestResultFileRequest extends SpeakeasyBase {
    /**
     * The ID of the schedule for which to retrieve the latest result file. This ID is generated when the schedule was created by the <strong>createSchedule</strong> method.
     */
    scheduleId: string;
}
export declare class GetLatestResultFileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
