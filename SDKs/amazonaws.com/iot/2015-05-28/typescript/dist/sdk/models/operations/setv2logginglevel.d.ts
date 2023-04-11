import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The log level.
 */
export declare enum SetV2LoggingLevelRequestBodyLogLevelEnum {
    Debug = "DEBUG",
    Info = "INFO",
    Error = "ERROR",
    Warn = "WARN",
    Disabled = "DISABLED"
}
/**
 * A log target.
 */
export declare class SetV2LoggingLevelRequestBodyLogTarget extends SpeakeasyBase {
    targetName?: string;
    targetType?: shared.LogTargetTypeEnum;
}
export declare class SetV2LoggingLevelRequestBody extends SpeakeasyBase {
    /**
     * The log level.
     */
    logLevel: SetV2LoggingLevelRequestBodyLogLevelEnum;
    /**
     * A log target.
     */
    logTarget: SetV2LoggingLevelRequestBodyLogTarget;
}
export declare class SetV2LoggingLevelRequest extends SpeakeasyBase {
    requestBody: SetV2LoggingLevelRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SetV2LoggingLevelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NotConfiguredException
     */
    notConfiguredException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
}
