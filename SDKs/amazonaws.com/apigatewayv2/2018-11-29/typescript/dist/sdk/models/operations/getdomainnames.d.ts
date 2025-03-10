import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDomainNamesRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The maximum number of elements to be returned for this resource.
     */
    maxResults?: string;
    /**
     * The next page of elements from this collection. Not valid for the last element of the collection.
     */
    nextToken?: string;
}
export declare class GetDomainNamesResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    getDomainNamesResponse?: shared.GetDomainNamesResponse;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
