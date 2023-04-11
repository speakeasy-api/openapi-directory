import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentError } from "./environmenterror";
/**
 * The results of an operation to update or read environment variables. If the operation succeeds, the response contains the environment variables. If it fails, the response contains details about the error.
 */
export declare class EnvironmentResponse extends SpeakeasyBase {
    error?: EnvironmentError;
    variables?: Record<string, string>;
}
