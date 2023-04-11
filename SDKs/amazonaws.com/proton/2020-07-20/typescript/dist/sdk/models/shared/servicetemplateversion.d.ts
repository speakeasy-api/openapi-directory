import { SpeakeasyBase } from "../../../internal/utils";
import { CompatibleEnvironmentTemplate } from "./compatibleenvironmenttemplate";
import { ServiceTemplateSupportedComponentSourceTypeEnum } from "./servicetemplatesupportedcomponentsourcetypeenum";
import { TemplateVersionStatusEnum } from "./templateversionstatusenum";
/**
 * Detailed data of an Proton service template version resource.
 */
export declare class ServiceTemplateVersion extends SpeakeasyBase {
    arn: string;
    compatibleEnvironmentTemplates: CompatibleEnvironmentTemplate[];
    createdAt: Date;
    description?: string;
    lastModifiedAt: Date;
    majorVersion: string;
    minorVersion: string;
    recommendedMinorVersion?: string;
    schema?: string;
    status: TemplateVersionStatusEnum;
    statusMessage?: string;
    supportedComponentSources?: ServiceTemplateSupportedComponentSourceTypeEnum[];
    templateName: string;
}
