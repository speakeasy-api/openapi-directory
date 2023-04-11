import { SpeakeasyBase } from "../../../internal/utils";
import { CompatibleEnvironmentTemplateInput } from "./compatibleenvironmenttemplateinput";
import { ServiceTemplateSupportedComponentSourceTypeEnum } from "./servicetemplatesupportedcomponentsourcetypeenum";
import { Tag } from "./tag";
import { TemplateVersionSourceInput } from "./templateversionsourceinput";
export declare class CreateServiceTemplateVersionInput extends SpeakeasyBase {
    clientToken?: string;
    compatibleEnvironmentTemplates: CompatibleEnvironmentTemplateInput[];
    description?: string;
    majorVersion?: string;
    source: TemplateVersionSourceInput;
    supportedComponentSources?: ServiceTemplateSupportedComponentSourceTypeEnum[];
    tags?: Tag[];
    templateName: string;
}
