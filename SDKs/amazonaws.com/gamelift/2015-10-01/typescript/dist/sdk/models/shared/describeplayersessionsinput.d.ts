import { SpeakeasyBase } from "../../../internal/utils";
export declare class DescribePlayerSessionsInput extends SpeakeasyBase {
    gameSessionId?: string;
    limit?: number;
    nextToken?: string;
    playerId?: string;
    playerSessionId?: string;
    playerSessionStatusFilter?: string;
}
