import { SpeakeasyBase } from "../../../internal/utils";
import { StageStateEnum } from "./stagestateenum";
/**
 * The summary of the properties of a stage.
 */
export declare class StageSummary extends SpeakeasyBase {
    description?: string;
    gameKey?: string;
    name?: string;
    state?: StageStateEnum;
    tags?: Record<string, string>;
}
