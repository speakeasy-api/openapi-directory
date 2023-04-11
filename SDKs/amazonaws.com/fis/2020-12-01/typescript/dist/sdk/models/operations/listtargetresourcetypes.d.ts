import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListTargetResourceTypesRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
     */
    maxResults?: number;
    /**
     * The token for the next page of results.
     */
    nextToken?: string;
}
export declare class ListTargetResourceTypesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listTargetResourceTypesResponse?: shared.ListTargetResourceTypesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
