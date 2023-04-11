import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetScheduledTasksRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    domainNamePathParameter: string;
    /**
     * Linux hosting domain name.
     */
    domainNameQueryParameter: string;
}
export declare class GetScheduledTasksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    scheduledTasks?: shared.ScheduledTask[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
