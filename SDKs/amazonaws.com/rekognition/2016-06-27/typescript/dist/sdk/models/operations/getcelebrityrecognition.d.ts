import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCelebrityRecognitionXAmzTargetEnum {
    RekognitionServiceGetCelebrityRecognition = "RekognitionService.GetCelebrityRecognition"
}
export declare class GetCelebrityRecognitionRequest extends SpeakeasyBase {
    getCelebrityRecognitionRequest: shared.GetCelebrityRecognitionRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCelebrityRecognitionXAmzTargetEnum;
}
export declare class GetCelebrityRecognitionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getCelebrityRecognitionResponse?: shared.GetCelebrityRecognitionResponse;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidPaginationTokenException
     */
    invalidPaginationTokenException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ProvisionedThroughputExceededException
     */
    provisionedThroughputExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
