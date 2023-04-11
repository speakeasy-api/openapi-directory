import { SpeakeasyBase } from "../../../internal/utils";
import { DataTypeEnum } from "./datatypeenum";
/**
 * The input parameters of a template.
 */
export declare class TemplateInput extends SpeakeasyBase {
    dataType?: DataTypeEnum;
    inputName?: string;
    required?: boolean;
}
