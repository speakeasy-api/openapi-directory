import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListSecurityProfilesRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * A filter to limit results to the security profiles that use the defined dimension. Cannot be used with <code>metricName</code>
     */
    dimensionName?: string;
    /**
     * The maximum number of results to return at one time.
     */
    maxResults?: number;
    /**
     *  The name of the custom metric. Cannot be used with <code>dimensionName</code>.
     */
    metricName?: string;
    /**
     * The token for the next set of results.
     */
    nextToken?: string;
}
export declare class ListSecurityProfilesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listSecurityProfilesResponse?: shared.ListSecurityProfilesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
