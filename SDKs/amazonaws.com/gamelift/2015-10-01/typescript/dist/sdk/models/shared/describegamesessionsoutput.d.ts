import { SpeakeasyBase } from "../../../internal/utils";
import { GameSession } from "./gamesession";
/**
 * Success
 */
export declare class DescribeGameSessionsOutput extends SpeakeasyBase {
    gameSessions?: GameSession[];
    nextToken?: string;
}
