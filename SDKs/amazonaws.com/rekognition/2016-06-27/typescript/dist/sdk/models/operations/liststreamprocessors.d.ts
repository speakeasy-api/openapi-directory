import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListStreamProcessorsXAmzTargetEnum {
    RekognitionServiceListStreamProcessors = "RekognitionService.ListStreamProcessors"
}
export declare class ListStreamProcessorsRequest extends SpeakeasyBase {
    listStreamProcessorsRequest: shared.ListStreamProcessorsRequest;
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
    xAmzTarget: ListStreamProcessorsXAmzTargetEnum;
}
export declare class ListStreamProcessorsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
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
     * Success
     */
    listStreamProcessorsResponse?: shared.ListStreamProcessorsResponse;
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
