import { SpeakeasyBase } from "../../../internal/utils";
import { GameStateEnum } from "./gamestateenum";
/**
 * Details about a game.
 */
export declare class GameDetails extends SpeakeasyBase {
    arn?: string;
    created?: Date;
    description?: string;
    enableTerminationProtection?: boolean;
    lastUpdated?: Date;
    name?: string;
    state?: GameStateEnum;
    tags?: Record<string, string>;
}
