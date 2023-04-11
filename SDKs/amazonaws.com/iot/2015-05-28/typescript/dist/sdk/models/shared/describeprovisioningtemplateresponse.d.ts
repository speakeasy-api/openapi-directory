import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningHook } from "./provisioninghook";
import { TemplateTypeEnum } from "./templatetypeenum";
/**
 * Success
 */
export declare class DescribeProvisioningTemplateResponse extends SpeakeasyBase {
    creationDate?: Date;
    defaultVersionId?: number;
    description?: string;
    enabled?: boolean;
    lastModifiedDate?: Date;
    preProvisioningHook?: ProvisioningHook;
    provisioningRoleArn?: string;
    templateArn?: string;
    templateBody?: string;
    templateName?: string;
    type?: TemplateTypeEnum;
}
