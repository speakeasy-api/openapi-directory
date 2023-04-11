import { SpeakeasyBase } from "../../../internal/utils";
import { Monitor } from "./monitor";
/**
 * Success
 */
export declare class ListMonitorsOutput extends SpeakeasyBase {
    monitors: Monitor[];
    nextToken?: string;
}
