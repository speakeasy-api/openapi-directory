import { SpeakeasyBase } from "../../../internal/utils";
import { FunctionIsolationModeEnum } from "./functionisolationmodeenum";
import { FunctionRunAsConfig } from "./functionrunasconfig";
/**
 * Configuration information that specifies how a Lambda function runs.
 */
export declare class FunctionExecutionConfig extends SpeakeasyBase {
    /**
     * Specifies whether the Lambda function runs in a Greengrass container (default) or without containerization. Unless your scenario requires that you run without containerization, we recommend that you run in a Greengrass container. Omit this value to run the Lambda function with the default containerization for the group.
     */
    isolationMode?: FunctionIsolationModeEnum;
    /**
     * Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''.
     */
    runAs?: FunctionRunAsConfig;
}
