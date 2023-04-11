import { SpeakeasyBase } from "../../../internal/utils";
import { PlayerSession } from "./playersession";
/**
 * Success
 */
export declare class DescribePlayerSessionsOutput extends SpeakeasyBase {
    nextToken?: string;
    playerSessions?: PlayerSession[];
}
