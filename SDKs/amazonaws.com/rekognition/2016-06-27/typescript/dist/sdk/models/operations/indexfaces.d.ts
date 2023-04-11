import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum IndexFacesXAmzTargetEnum {
    RekognitionServiceIndexFaces = "RekognitionService.IndexFaces"
}
export declare class IndexFacesRequest extends SpeakeasyBase {
    indexFacesRequest: shared.IndexFacesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: IndexFacesXAmzTargetEnum;
}
export declare class IndexFacesResponse extends SpeakeasyBase {
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
     * Success
     */
    indexFacesResponse?: shared.IndexFacesResponse;
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
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
