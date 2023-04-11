import { SpeakeasyBase } from "../../../internal/utils";
import { TemplateTypeEnum } from "./templatetypeenum";
/**
 * A summary of information about a provisioning template.
 */
export declare class ProvisioningTemplateSummary extends SpeakeasyBase {
    creationDate?: Date;
    description?: string;
    enabled?: boolean;
    lastModifiedDate?: Date;
    templateArn?: string;
    templateName?: string;
    type?: TemplateTypeEnum;
}
