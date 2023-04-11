import { SpeakeasyBase } from "../../../internal/utils";
import { TemplateSummary } from "./templatesummary";
/**
 * Success
 */
export declare class ListMigrationWorkflowTemplatesResponse extends SpeakeasyBase {
    nextToken?: string;
    templateSummary: TemplateSummary[];
}
