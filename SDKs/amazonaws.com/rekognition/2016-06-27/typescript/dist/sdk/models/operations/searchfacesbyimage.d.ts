import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SearchFacesByImageXAmzTargetEnum {
    RekognitionServiceSearchFacesByImage = "RekognitionService.SearchFacesByImage"
}
export declare class SearchFacesByImageRequest extends SpeakeasyBase {
    searchFacesByImageRequest: shared.SearchFacesByImageRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SearchFacesByImageXAmzTargetEnum;
}
export declare class SearchFacesByImageResponse extends SpeakeasyBase {
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    searchFacesByImageResponse?: shared.SearchFacesByImageResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
