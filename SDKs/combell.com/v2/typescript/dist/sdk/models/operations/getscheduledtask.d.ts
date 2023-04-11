import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetScheduledTaskRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    domainNamePathParameter: string;
    /**
     * Linux hosting domain name.
     */
    domainNameQueryParameter: string;
    /**
     * Automatically added
     */
    scheduledTaskIdPathParameter: string;
    /**
     * Id of the scheduled task.
     */
    scheduledTaskIdQueryParameter: string;
}
export declare class GetScheduledTaskResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    scheduledTask?: shared.ScheduledTask;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
