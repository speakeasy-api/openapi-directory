import { SpeakeasyBase } from "../../../internal/utils";
import { JobTemplateSummary } from "./jobtemplatesummary";
/**
 * Success
 */
export declare class ListJobTemplatesResponse extends SpeakeasyBase {
    jobTemplates?: JobTemplateSummary[];
    nextToken?: string;
}
