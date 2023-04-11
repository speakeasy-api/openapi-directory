import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListCustomEntityTypesXAmzTargetEnum {
    AWSGlueListCustomEntityTypes = "AWSGlue.ListCustomEntityTypes"
}
export declare class ListCustomEntityTypesRequest extends SpeakeasyBase {
    listCustomEntityTypesRequest: shared.ListCustomEntityTypesRequest;
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
    xAmzTarget: ListCustomEntityTypesXAmzTargetEnum;
}
export declare class ListCustomEntityTypesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * Success
     */
    listCustomEntityTypesResponse?: shared.ListCustomEntityTypesResponse;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
