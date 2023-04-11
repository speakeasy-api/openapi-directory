import { SpeakeasyBase } from "../../../internal/utils";
import { AwsLambdaFunctionEnvironmentError } from "./awslambdafunctionenvironmenterror";
/**
 * A function's environment variable settings.
 */
export declare class AwsLambdaFunctionEnvironment extends SpeakeasyBase {
    error?: AwsLambdaFunctionEnvironmentError;
    variables?: Record<string, string>;
}
