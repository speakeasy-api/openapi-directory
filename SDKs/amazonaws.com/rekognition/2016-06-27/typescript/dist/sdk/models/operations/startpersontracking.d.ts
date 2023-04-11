import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartPersonTrackingXAmzTargetEnum {
    RekognitionServiceStartPersonTracking = "RekognitionService.StartPersonTracking"
}
export declare class StartPersonTrackingRequest extends SpeakeasyBase {
    startPersonTrackingRequest: shared.StartPersonTrackingRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartPersonTrackingXAmzTargetEnum;
}
export declare class StartPersonTrackingResponse extends SpeakeasyBase {
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
    startPersonTrackingResponse?: shared.StartPersonTrackingResponse;
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
