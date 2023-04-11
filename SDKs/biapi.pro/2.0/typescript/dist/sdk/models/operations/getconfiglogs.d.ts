import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConfigLogsRequest extends SpeakeasyBase {
    expand?: string;
    /**
     * maximum date of the change
     */
    maxDate?: Date;
    /**
     * minimal date of the change
     */
    minDate?: Date;
    /**
     * limit the results to keys matching the given value
     */
    search?: string;
    /**
     * type of change done on the configuration
     */
    type?: string;
}
/**
 * configlogs
 */
export declare class GetConfigLogs200ApplicationJSON extends SpeakeasyBase {
    configlogs: shared.ConfigLog[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetConfigLogsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * configlogs
     */
    getConfigLogs200ApplicationJSONObject?: GetConfigLogs200ApplicationJSON;
}
