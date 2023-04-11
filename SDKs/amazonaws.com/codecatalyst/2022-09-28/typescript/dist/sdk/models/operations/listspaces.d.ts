import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListSpacesRequestBody extends SpeakeasyBase {
    /**
     * A token returned from a call to this API to indicate the next batch of results to return, if any.
     */
    nextToken?: string;
}
export declare class ListSpacesRequest extends SpeakeasyBase {
    requestBody: ListSpacesRequestBody;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListSpacesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    listSpacesResponse?: shared.ListSpacesResponse;
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
    /**
     * ValidationException
     */
    validationException?: any;
}
