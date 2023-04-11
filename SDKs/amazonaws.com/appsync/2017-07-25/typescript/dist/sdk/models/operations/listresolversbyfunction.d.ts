import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListResolversByFunctionRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The API ID.
     */
    apiId: string;
    /**
     * The function ID.
     */
    functionId: string;
    /**
     * The maximum number of results that you want the request to return.
     */
    maxResults?: number;
    /**
     * An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
     */
    nextToken?: string;
}
export declare class ListResolversByFunctionResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * Success
     */
    listResolversByFunctionResponse?: shared.ListResolversByFunctionResponse;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
