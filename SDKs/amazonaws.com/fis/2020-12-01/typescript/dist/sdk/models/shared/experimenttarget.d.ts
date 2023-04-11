import { SpeakeasyBase } from "../../../internal/utils";
import { ExperimentTargetFilter } from "./experimenttargetfilter";
/**
 * Describes a target for an experiment.
 */
export declare class ExperimentTarget extends SpeakeasyBase {
    filters?: ExperimentTargetFilter[];
    parameters?: Record<string, string>;
    resourceArns?: string[];
    resourceTags?: Record<string, string>;
    resourceType?: string;
    selectionMode?: string;
}
