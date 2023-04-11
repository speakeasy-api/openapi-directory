import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The values of the AWS IoT Events logging options.
 */
export declare class PutLoggingOptionsRequestBodyLoggingOptions extends SpeakeasyBase {
    detectorDebugOptions?: shared.DetectorDebugOption[];
    enabled?: boolean;
    level?: shared.LoggingLevelEnum;
    roleArn?: string;
}
export declare class PutLoggingOptionsRequestBody extends SpeakeasyBase {
    /**
     * The values of the AWS IoT Events logging options.
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
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
