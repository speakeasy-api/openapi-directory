import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartTextDetectionXAmzTargetEnum {
    RekognitionServiceStartTextDetection = "RekognitionService.StartTextDetection"
}
export declare class StartTextDetectionRequest extends SpeakeasyBase {
    startTextDetectionRequest: shared.StartTextDetectionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartTextDetectionXAmzTargetEnum;
}
export declare class StartTextDetectionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * IdempotentParameterMismatchException
     */
    idempotentParameterMismatchException?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidS3ObjectException
     */
    invalidS3ObjectException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ProvisionedThroughputExceededException
     */
    provisionedThroughputExceededException?: any;
    /**
     * Success
     */
    startTextDetectionResponse?: shared.StartTextDetectionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * VideoTooLargeException
     */
    videoTooLargeException?: any;
}
