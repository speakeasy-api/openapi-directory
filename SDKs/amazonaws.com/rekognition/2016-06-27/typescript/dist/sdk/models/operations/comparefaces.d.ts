import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CompareFacesXAmzTargetEnum {
    RekognitionServiceCompareFaces = "RekognitionService.CompareFaces"
}
export declare class CompareFacesRequest extends SpeakeasyBase {
    compareFacesRequest: shared.CompareFacesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CompareFacesXAmzTargetEnum;
}
export declare class CompareFacesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    compareFacesResponse?: shared.CompareFacesResponse;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
