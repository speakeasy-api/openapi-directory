import { SpeakeasyBase } from "../../../internal/utils";
import { ExperimentTemplateTargetFilter } from "./experimenttemplatetargetfilter";
export declare class ExperimentTemplateTarget extends SpeakeasyBase {
    filters?: ExperimentTemplateTargetFilter[];
    resourceArns?: string[];
    resourceTags?: Record<string, string>;
    resourceType?: string;
    selectionMode?: string;
}
