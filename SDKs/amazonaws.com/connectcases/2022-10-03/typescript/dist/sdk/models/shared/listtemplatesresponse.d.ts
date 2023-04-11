import { SpeakeasyBase } from "../../../internal/utils";
import { TemplateSummary } from "./templatesummary";
/**
 * Success
 */
export declare class ListTemplatesResponse extends SpeakeasyBase {
    nextToken?: string;
    templates: TemplateSummary[];
}
