import { SpeakeasyBase } from "../../../internal/utils";
import { GameSessionDetail } from "./gamesessiondetail";
/**
 * Success
 */
export declare class DescribeGameSessionDetailsOutput extends SpeakeasyBase {
    gameSessionDetails?: GameSessionDetail[];
    nextToken?: string;
}
