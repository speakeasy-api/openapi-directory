import { SpeakeasyBase } from "../../../internal/utils";
import { TemplateTypeEnum } from "./templatetypeenum";
export declare class GetTemplateSyncStatusInput extends SpeakeasyBase {
    templateName: string;
    templateType: TemplateTypeEnum;
    templateVersion: string;
}
