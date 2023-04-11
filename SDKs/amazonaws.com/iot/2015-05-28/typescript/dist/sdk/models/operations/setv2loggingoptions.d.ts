import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The default logging level.
 */
export declare enum SetV2LoggingOptionsRequestBodyDefaultLogLevelEnum {
    Debug = "DEBUG",
    Info = "INFO",
    Error = "ERROR",
    Warn = "WARN",
    Disabled = "DISABLED"
}
export declare class SetV2LoggingOptionsRequestBody extends SpeakeasyBase {
    /**
     * The default logging level.
     */
    defaultLogLevel?: SetV2LoggingOptionsRequestBodyDefaultLogLevelEnum;
    /**
     * If true all logs are disabled. The default is false.
     */
    disableAllLogs?: boolean;
    /**
     * The ARN of the role that allows IoT to write to Cloudwatch logs.
     */
    roleArn?: string;
}
export declare class SetV2LoggingOptionsRequest extends SpeakeasyBase {
    requestBody: SetV2LoggingOptionsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SetV2LoggingOptionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
}
