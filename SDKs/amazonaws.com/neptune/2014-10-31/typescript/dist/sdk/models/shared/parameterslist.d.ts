import { SpeakeasyBase } from "../../../internal/utils";
import { ApplyMethodEnum } from "./applymethodenum";
/**
 * Specifies a parameter.
**/
export declare class ParametersList extends SpeakeasyBase {
    allowedValues?: string;
    applyMethod?: ApplyMethodEnum;
    applyType?: string;
    dataType?: string;
    description?: string;
    isModifiable?: boolean;
    minimumEngineVersion?: string;
    parameterName?: string;
    parameterValue?: string;
    source?: string;
}
