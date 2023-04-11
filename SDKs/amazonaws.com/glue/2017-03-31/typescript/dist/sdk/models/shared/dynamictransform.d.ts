import { SpeakeasyBase } from "../../../internal/utils";
import { TransformConfigParameter } from "./transformconfigparameter";
/**
 * Specifies the set of parameters needed to perform the dynamic transform.
 */
export declare class DynamicTransform extends SpeakeasyBase {
    functionName: string;
    inputs: string[];
    name: string;
    parameters?: TransformConfigParameter[];
    path: string;
    transformName: string;
    version?: string;
}
