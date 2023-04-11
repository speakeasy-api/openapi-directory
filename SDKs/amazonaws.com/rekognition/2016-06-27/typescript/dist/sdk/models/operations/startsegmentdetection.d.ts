import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartSegmentDetectionXAmzTargetEnum {
    RekognitionServiceStartSegmentDetection = "RekognitionService.StartSegmentDetection"
}
export declare class StartSegmentDetectionRequest extends SpeakeasyBase {
    startSegmentDetectionRequest: shared.StartSegmentDetectionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartSegmentDetectionXAmzTargetEnum;
}
export declare class StartSegmentDetectionResponse extends SpeakeasyBase {
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
    startSegmentDetectionResponse?: shared.StartSegmentDetectionResponse;
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
