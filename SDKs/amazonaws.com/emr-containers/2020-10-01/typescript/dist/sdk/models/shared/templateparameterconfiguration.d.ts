import { SpeakeasyBase } from "../../../internal/utils";
import { TemplateParameterDataTypeEnum } from "./templateparameterdatatypeenum";
/**
 * The configuration of a job template parameter.
 */
export declare class TemplateParameterConfiguration extends SpeakeasyBase {
    defaultValue?: string;
    type?: TemplateParameterDataTypeEnum;
}
