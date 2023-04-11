import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RecognizeCelebritiesXAmzTargetEnum {
    RekognitionServiceRecognizeCelebrities = "RekognitionService.RecognizeCelebrities"
}
export declare class RecognizeCelebritiesRequest extends SpeakeasyBase {
    recognizeCelebritiesRequest: shared.RecognizeCelebritiesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RecognizeCelebritiesXAmzTargetEnum;
}
export declare class RecognizeCelebritiesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
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
    /**
     * Success
     */
    recognizeCelebritiesResponse?: shared.RecognizeCelebritiesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
