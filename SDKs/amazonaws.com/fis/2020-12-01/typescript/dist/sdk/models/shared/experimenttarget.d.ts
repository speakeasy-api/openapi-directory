import { SpeakeasyBase } from "../../../internal/utils";
import { ExperimentTargetFilter } from "./experimenttargetfilter";
export declare class ExperimentTarget extends SpeakeasyBase {
    filters?: ExperimentTargetFilter[];
    resourceArns?: string[];
    resourceTags?: Record<string, string>;
    resourceType?: string;
    selectionMode?: string;
}
