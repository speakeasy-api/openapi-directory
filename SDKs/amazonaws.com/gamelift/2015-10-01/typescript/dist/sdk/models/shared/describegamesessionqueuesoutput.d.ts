import { SpeakeasyBase } from "../../../internal/utils";
import { GameSessionQueue } from "./gamesessionqueue";
/**
 * Success
 */
export declare class DescribeGameSessionQueuesOutput extends SpeakeasyBase {
    gameSessionQueues?: GameSessionQueue[];
    nextToken?: string;
}
