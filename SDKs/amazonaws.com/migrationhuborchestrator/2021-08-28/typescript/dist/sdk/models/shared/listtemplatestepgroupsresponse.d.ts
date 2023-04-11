import { SpeakeasyBase } from "../../../internal/utils";
import { TemplateStepGroupSummary } from "./templatestepgroupsummary";
/**
 * Success
 */
export declare class ListTemplateStepGroupsResponse extends SpeakeasyBase {
    nextToken?: string;
    templateStepGroupSummary: TemplateStepGroupSummary[];
}
