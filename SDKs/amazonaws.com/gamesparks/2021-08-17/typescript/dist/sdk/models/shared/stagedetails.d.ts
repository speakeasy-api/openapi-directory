import { SpeakeasyBase } from "../../../internal/utils";
import { StageStateEnum } from "./stagestateenum";
/**
 * Properties that provide details of a stage.
 */
export declare class StageDetails extends SpeakeasyBase {
    arn?: string;
    created?: Date;
    description?: string;
    gameKey?: string;
    lastUpdated?: Date;
    logGroup?: string;
    name?: string;
    role?: string;
    state?: StageStateEnum;
    tags?: Record<string, string>;
}
