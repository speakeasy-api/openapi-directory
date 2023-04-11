import { SpeakeasyBase } from "../../../internal/utils";
import { Session } from "./session";
/**
 * Success
 */
export declare class DescribeSessionsResult extends SpeakeasyBase {
    nextToken?: string;
    sessions?: Session[];
}
