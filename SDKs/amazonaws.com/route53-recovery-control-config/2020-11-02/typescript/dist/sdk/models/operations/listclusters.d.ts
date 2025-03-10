import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListClustersRequest extends SpeakeasyBase {
    /**
     * The number of objects that you want to return with this call.
     */
    maxResults?: number;
    /**
     * The token that identifies which batch of results you want to see.
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListClustersResponse extends SpeakeasyBase {
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
    listClustersResponse?: shared.ListClustersResponse;
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
    /**
     * ValidationException
     */
    validationException?: any;
}
