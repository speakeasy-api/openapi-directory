import { SpeakeasyBase } from "../../../internal/utils";
import { TemplateVersionStatusEnum } from "./templateversionstatusenum";
/**
 * Summary data of an Proton service template version resource.
 */
export declare class ServiceTemplateVersionSummary extends SpeakeasyBase {
    arn: string;
    createdAt: Date;
    description?: string;
    lastModifiedAt: Date;
    majorVersion: string;
    minorVersion: string;
    recommendedMinorVersion?: string;
    status: TemplateVersionStatusEnum;
    statusMessage?: string;
    templateName: string;
}
