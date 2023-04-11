import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Log } from "./log";
import { Meta } from "./meta";
/**
 * Logs
 */
export declare class GetLogsResponse extends SpeakeasyBase {
    data: Log[];
    /**
     * Links to navigate to previous or next pages through the API
     */
    links?: Links;
    /**
     * Response metadata
     */
    meta?: Meta;
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}
