import { SpeakeasyBase } from "../../../internal/utils";
import { ExperimentTemplateTargetFilter } from "./experimenttemplatetargetfilter";
/**
 * Describes a target for an experiment template.
 */
export declare class ExperimentTemplateTarget extends SpeakeasyBase {
    filters?: ExperimentTemplateTargetFilter[];
    parameters?: Record<string, string>;
    resourceArns?: string[];
    resourceTags?: Record<string, string>;
    resourceType?: string;
    selectionMode?: string;
}
