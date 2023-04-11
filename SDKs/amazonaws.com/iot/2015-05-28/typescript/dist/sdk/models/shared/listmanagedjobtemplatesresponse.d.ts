import { SpeakeasyBase } from "../../../internal/utils";
import { ManagedJobTemplateSummary } from "./managedjobtemplatesummary";
/**
 * Success
 */
export declare class ListManagedJobTemplatesResponse extends SpeakeasyBase {
    managedJobTemplates?: ManagedJobTemplateSummary[];
    nextToken?: string;
}
