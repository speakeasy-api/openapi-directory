import { SpeakeasyBase } from "../../../internal/utils";
import { GameStateEnum } from "./gamestateenum";
/**
 * The summary of the properties of a game.
 */
export declare class GameSummary extends SpeakeasyBase {
    description?: string;
    name?: string;
    state?: GameStateEnum;
    tags?: Record<string, string>;
}
