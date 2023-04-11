import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DetectModerationLabelsXAmzTargetEnum {
    RekognitionServiceDetectModerationLabels = "RekognitionService.DetectModerationLabels"
}
export declare class DetectModerationLabelsRequest extends SpeakeasyBase {
    detectModerationLabelsRequest: shared.DetectModerationLabelsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetectModerationLabelsXAmzTargetEnum;
}
export declare class DetectModerationLabelsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    detectModerationLabelsResponse?: shared.DetectModerationLabelsResponse;
    /**
     * HumanLoopQuotaExceededException
     */
    humanLoopQuotaExceededException?: any;
    /**
     * ImageTooLargeException
     */
    imageTooLargeException?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidImageFormatException
     */
    invalidImageFormatException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidS3ObjectException
     */
    invalidS3ObjectException?: any;
    /**
     * ProvisionedThroughputExceededException
     */
    provisionedThroughputExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
