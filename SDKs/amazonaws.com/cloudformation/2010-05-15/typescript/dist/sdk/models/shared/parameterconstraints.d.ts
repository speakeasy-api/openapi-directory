import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A set of criteria that CloudFormation uses to validate parameter values. Although other constraints might be defined in the stack template, CloudFormation returns only the <code>AllowedValues</code> property.
 */
export declare class ParameterConstraints extends SpeakeasyBase {
    allowedValues?: string[];
}
