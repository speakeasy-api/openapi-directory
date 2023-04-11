import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Describes the logging options payload.
 */
export declare class SetLoggingOptionsRequestBodyLoggingOptionsPayload extends SpeakeasyBase {
    logLevel?: shared.LogLevelEnum;
    roleArn?: string;
}
export declare class SetLoggingOptionsRequestBody extends SpeakeasyBase {
    /**
     * Describes the logging options payload.
     */
    loggingOptionsPayload: SetLoggingOptionsRequestBodyLoggingOptionsPayload;
}
export declare class SetLoggingOptionsRequest extends SpeakeasyBase {
    requestBody: SetLoggingOptionsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SetLoggingOptionsResponse extends SpeakeasyBase {
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
