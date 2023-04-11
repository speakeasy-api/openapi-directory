import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that contains information about the managed template.
 */
export declare class ManagedJobTemplateSummary extends SpeakeasyBase {
    description?: string;
    environments?: string[];
    templateArn?: string;
    templateName?: string;
    templateVersion?: string;
}
