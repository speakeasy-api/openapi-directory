import { SpeakeasyBase } from "../../../internal/utils";
import { ConflictResolvingModelEnum } from "./conflictresolvingmodelenum";
/**
 * How the auto-merging process should resolve conflicts between different profiles.
 */
export declare class ConflictResolution extends SpeakeasyBase {
    conflictResolvingModel: ConflictResolvingModelEnum;
    sourceName?: string;
}
