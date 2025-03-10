import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetResourceShareInvitationsRequestBody extends SpeakeasyBase {
    /**
     * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
     */
    maxResults?: number;
    /**
     * Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.
     */
    nextToken?: string;
    /**
     * Specifies that you want details about invitations only for the resource shares described by this list of <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>
     */
    resourceShareArns?: string[];
    /**
     * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of the resource share invitations you want information about.
     */
    resourceShareInvitationArns?: string[];
}
export declare class GetResourceShareInvitationsRequest extends SpeakeasyBase {
    requestBody: GetResourceShareInvitationsRequestBody;
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
export declare class GetResourceShareInvitationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getResourceShareInvitationsResponse?: shared.GetResourceShareInvitationsResponse;
    /**
     * InvalidMaxResultsException
     */
    invalidMaxResultsException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * MalformedArnException
     */
    malformedArnException?: any;
    /**
     * ResourceShareInvitationArnNotFoundException
     */
    resourceShareInvitationArnNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServerInternalException
     */
    serverInternalException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * UnknownResourceException
     */
    unknownResourceException?: any;
}
