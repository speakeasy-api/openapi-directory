import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { TemplateVersionSourceInput } from "./templateversionsourceinput";
export declare class CreateEnvironmentTemplateVersionInput extends SpeakeasyBase {
    clientToken?: string;
    description?: string;
    majorVersion?: string;
    source: TemplateVersionSourceInput;
    tags?: Tag[];
    templateName: string;
}
