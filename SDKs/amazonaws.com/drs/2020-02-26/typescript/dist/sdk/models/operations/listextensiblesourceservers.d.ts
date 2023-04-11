import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListExtensibleSourceServersRequestBody extends SpeakeasyBase {
    /**
     * The maximum number of extensible source servers to retrieve.
     */
    maxResults?: number;
    /**
     * The token of the next extensible source server to retrieve.
     */
    nextToken?: string;
    /**
     * The Id of the staging Account to retrieve extensible source servers from.
     */
    stagingAccountID: string;
}
export declare class ListExtensibleSourceServersRequest extends SpeakeasyBase {
    requestBody: ListExtensibleSourceServersRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListExtensibleSourceServersResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listExtensibleSourceServersResponse?: shared.ListExtensibleSourceServersResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
