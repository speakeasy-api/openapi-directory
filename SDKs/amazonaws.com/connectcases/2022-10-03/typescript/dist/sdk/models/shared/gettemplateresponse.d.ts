import { SpeakeasyBase } from "../../../internal/utils";
import { LayoutConfiguration } from "./layoutconfiguration";
import { RequiredField } from "./requiredfield";
import { TemplateStatusEnum } from "./templatestatusenum";
/**
 * Success
 */
export declare class GetTemplateResponse extends SpeakeasyBase {
    description?: string;
    layoutConfiguration?: LayoutConfiguration;
    name: string;
    requiredFields?: RequiredField[];
    status: TemplateStatusEnum;
    tags?: Record<string, string>;
    templateArn: string;
    templateId: string;
}
