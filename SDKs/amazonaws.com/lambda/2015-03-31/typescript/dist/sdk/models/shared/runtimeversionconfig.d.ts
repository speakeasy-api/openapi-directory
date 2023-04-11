import { SpeakeasyBase } from "../../../internal/utils";
import { RuntimeVersionError } from "./runtimeversionerror";
/**
 * The ARN of the runtime and any errors that occured.
 */
export declare class RuntimeVersionConfig extends SpeakeasyBase {
    error?: RuntimeVersionError;
    runtimeVersionArn?: string;
}
