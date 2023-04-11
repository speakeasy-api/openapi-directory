import { SpeakeasyBase } from "../../../internal/utils";
import { ChangeLog } from "./changelog";
/**
 * Success
 */
export declare class GetChangeLogsResponse extends SpeakeasyBase {
    changeLogs?: ChangeLog[];
    nextToken?: string;
}
