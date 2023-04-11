import { SpeakeasyBase } from "../../../internal/utils";
import { ParamTypeEnum } from "./paramtypeenum";
/**
 * Specifies the parameters in the config file of the dynamic transform.
 */
export declare class TransformConfigParameter extends SpeakeasyBase {
    isOptional?: boolean;
    listType?: ParamTypeEnum;
    name: string;
    type: ParamTypeEnum;
    validationMessage?: string;
    validationRule?: string;
    value?: string[];
}
