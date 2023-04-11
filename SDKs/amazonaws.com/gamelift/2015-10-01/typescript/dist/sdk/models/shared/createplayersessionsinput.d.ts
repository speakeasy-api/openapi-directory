import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreatePlayerSessionsInput extends SpeakeasyBase {
    gameSessionId: string;
    playerDataMap?: Record<string, string>;
    playerIds: string[];
}
