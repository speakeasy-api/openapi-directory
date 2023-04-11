import { SpeakeasyBase } from "../../../internal/utils";
import { TemplateStatusEnum } from "./templatestatusenum";
/**
 * Template summary information.
 */
export declare class TemplateSummary extends SpeakeasyBase {
    name: string;
    status: TemplateStatusEnum;
    templateArn: string;
    templateId: string;
}
