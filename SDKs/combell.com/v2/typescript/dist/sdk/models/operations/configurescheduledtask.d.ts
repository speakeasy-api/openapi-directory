import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConfigureScheduledTaskRequest extends SpeakeasyBase {
    scheduledTask?: shared.ScheduledTask;
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
export declare class ConfigureScheduledTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
