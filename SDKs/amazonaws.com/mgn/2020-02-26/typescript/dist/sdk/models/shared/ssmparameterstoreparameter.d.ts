import { SpeakeasyBase } from "../../../internal/utils";
import { SsmParameterStoreParameterTypeEnum } from "./ssmparameterstoreparametertypeenum";
/**
 * AWS Systems Manager Parameter Store parameter.
 */
export declare class SsmParameterStoreParameter extends SpeakeasyBase {
    parameterName: string;
    parameterType: SsmParameterStoreParameterTypeEnum;
}
