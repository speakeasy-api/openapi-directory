import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * <p>Specifies that you want to retrieve details of only those resource shares that match the following:</p> <ul> <li> <p> <b> <code>SELF</code> </b> – resource shares that your account shares with other accounts</p> </li> <li> <p> <b> <code>OTHER-ACCOUNTS</code> </b> – resource shares that other accounts share with your account</p> </li> </ul>
 */
export declare enum GetResourceSharesRequestBodyResourceOwnerEnum {
    Self = "SELF",
    OtherAccounts = "OTHER-ACCOUNTS"
}
/**
 * Specifies that you want to retrieve details of only those resource shares that have this status.
 */
export declare enum GetResourceSharesRequestBodyResourceShareStatusEnum {
    Pending = "PENDING",
    Active = "ACTIVE",
    Failed = "FAILED",
    Deleting = "DELETING",
    Deleted = "DELETED"
}
export declare class GetResourceSharesRequestBody extends SpeakeasyBase {
    /**
     * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
     */
    maxResults?: number;
    /**
     * Specifies the name of an individual resource share that you want to retrieve details about.
     */
    name?: string;
    /**
     * Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.
     */
    nextToken?: string;
    /**
     * Specifies that you want to retrieve details of only those resource shares that use the RAM permission with this <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a>.
     */
    permissionArn?: string;
    /**
     * <p>Specifies that you want to retrieve details of only those resource shares that match the following:</p> <ul> <li> <p> <b> <code>SELF</code> </b> – resource shares that your account shares with other accounts</p> </li> <li> <p> <b> <code>OTHER-ACCOUNTS</code> </b> – resource shares that other accounts share with your account</p> </li> </ul>
     */
    resourceOwner: GetResourceSharesRequestBodyResourceOwnerEnum;
    /**
     * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of individual resource shares that you want information about.
     */
    resourceShareArns?: string[];
    /**
     * Specifies that you want to retrieve details of only those resource shares that have this status.
     */
    resourceShareStatus?: GetResourceSharesRequestBodyResourceShareStatusEnum;
    /**
     * Specifies that you want to retrieve details of only those resource shares that match the specified tag keys and values.
     */
    tagFilters?: shared.TagFilter[];
}
export declare class GetResourceSharesRequest extends SpeakeasyBase {
    requestBody: GetResourceSharesRequestBody;
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
export declare class GetResourceSharesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getResourceSharesResponse?: shared.GetResourceSharesResponse;
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
