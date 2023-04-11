import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information about logging options.
 */
export declare class PutLoggingOptionsRequestBodyLoggingOptions extends SpeakeasyBase {
    enabled?: boolean;
    level?: shared.LoggingLevelEnum;
    roleArn?: string;
}
export declare class PutLoggingOptionsRequestBody extends SpeakeasyBase {
    /**
     * Information about logging options.
     */
    loggingOptions: PutLoggingOptionsRequestBodyLoggingOptions;
}
export declare class PutLoggingOptionsRequest extends SpeakeasyBase {
    requestBody: PutLoggingOptionsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutLoggingOptionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
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
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
