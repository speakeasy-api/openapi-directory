import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies that you want to retrieve only associations with this status.
 */
export declare enum GetResourceShareAssociationsRequestBodyAssociationStatusEnum {
    Associating = "ASSOCIATING",
    Associated = "ASSOCIATED",
    Failed = "FAILED",
    Disassociating = "DISASSOCIATING",
    Disassociated = "DISASSOCIATED"
}
/**
 * <p>Specifies whether you want to retrieve the associations that involve a specified resource or principal.</p> <ul> <li> <p> <code>PRINCIPAL</code> – list the principals that are associated with the specified resource share.</p> </li> <li> <p> <code>RESOURCE</code> – list the resources that are associated with the specified resource share.</p> </li> </ul>
 */
export declare enum GetResourceShareAssociationsRequestBodyAssociationTypeEnum {
    Principal = "PRINCIPAL",
    Resource = "RESOURCE"
}
export declare class GetResourceShareAssociationsRequestBody extends SpeakeasyBase {
    /**
     * Specifies that you want to retrieve only associations with this status.
     */
    associationStatus?: GetResourceShareAssociationsRequestBodyAssociationStatusEnum;
    /**
     * <p>Specifies whether you want to retrieve the associations that involve a specified resource or principal.</p> <ul> <li> <p> <code>PRINCIPAL</code> – list the principals that are associated with the specified resource share.</p> </li> <li> <p> <code>RESOURCE</code> – list the resources that are associated with the specified resource share.</p> </li> </ul>
     */
    associationType: GetResourceShareAssociationsRequestBodyAssociationTypeEnum;
    /**
     * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
     */
    maxResults?: number;
    /**
     * Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.
     */
    nextToken?: string;
    /**
     * <p>Specifies the ID of the principal whose resource shares you want to retrieve. This can be an Amazon Web Services account ID, an organization ID, an organizational unit ID, or the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of an individual IAM user or role.</p> <p>You cannot specify this parameter if the association type is <code>RESOURCE</code>.</p>
     */
    principal?: string;
    /**
     * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the resource whose resource shares you want to retrieve.</p> <p>You cannot specify this parameter if the association type is <code>PRINCIPAL</code>.</p>
     */
    resourceArn?: string;
    /**
     * Specifies a list of <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of the resource share whose associations you want to retrieve.
     */
    resourceShareArns?: string[];
}
export declare class GetResourceShareAssociationsRequest extends SpeakeasyBase {
    requestBody: GetResourceShareAssociationsRequestBody;
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
export declare class GetResourceShareAssociationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getResourceShareAssociationsResponse?: shared.GetResourceShareAssociationsResponse;
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
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
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
