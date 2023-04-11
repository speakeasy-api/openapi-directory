import { SpeakeasyBase } from "../../../internal/utils";
import { ParameterConstraints } from "./parameterconstraints";
/**
 * The ParameterDeclaration data type.
 */
export declare class ParameterDeclaration extends SpeakeasyBase {
    defaultValue?: string;
    description?: string;
    noEcho?: boolean;
    parameterConstraints?: ParameterConstraints;
    parameterKey?: string;
    parameterType?: string;
}
