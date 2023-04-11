import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWorkUnitsRequestBody extends SpeakeasyBase {
    /**
     * A continuation token, if this is a continuation call.
     */
    nextToken?: string;
    /**
     * The size of each page to get in the Amazon Web Services service call. This does not affect the number of items returned in the command's output. Setting a smaller page size results in more calls to the Amazon Web Services service, retrieving fewer items in each call. This can help prevent the Amazon Web Services service calls from timing out.
     */
    pageSize?: number;
    /**
     * The ID of the plan query operation.
     */
    queryId: string;
}
export declare class GetWorkUnitsRequest extends SpeakeasyBase {
    /**
     * Pagination token
     */
    nextToken?: string;
    /**
     * Pagination limit
     */
    pageSize?: string;
    requestBody: GetWorkUnitsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetWorkUnitsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * ExpiredException
     */
    expiredException?: any;
    /**
     * Success
     */
    getWorkUnitsResponse?: shared.GetWorkUnitsResponse;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * WorkUnitsNotReadyYetException
     */
    workUnitsNotReadyYetException?: any;
}
