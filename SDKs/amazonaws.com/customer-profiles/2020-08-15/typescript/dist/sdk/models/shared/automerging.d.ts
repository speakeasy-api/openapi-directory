import { SpeakeasyBase } from "../../../internal/utils";
import { ConflictResolution } from "./conflictresolution";
import { Consolidation } from "./consolidation";
/**
 * Configuration settings for how to perform the auto-merging of profiles.
 */
export declare class AutoMerging extends SpeakeasyBase {
    conflictResolution?: ConflictResolution;
    consolidation?: Consolidation;
    enabled: boolean;
    minAllowedConfidenceScoreForMerging?: number;
}
