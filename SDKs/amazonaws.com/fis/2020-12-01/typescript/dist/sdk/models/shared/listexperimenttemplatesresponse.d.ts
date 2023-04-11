import { SpeakeasyBase } from "../../../internal/utils";
import { ExperimentTemplateSummary } from "./experimenttemplatesummary";
/**
 * Success
 */
export declare class ListExperimentTemplatesResponse extends SpeakeasyBase {
    experimentTemplates?: ExperimentTemplateSummary[];
    nextToken?: string;
}
