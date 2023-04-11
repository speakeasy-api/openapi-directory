import { SpeakeasyBase } from "../../../internal/utils";
import { TemplateSummary } from "./templatesummary";
/**
 * Success
 */
export declare class ListWorldTemplatesResponse extends SpeakeasyBase {
    nextToken?: string;
    templateSummaries?: TemplateSummary[];
}
