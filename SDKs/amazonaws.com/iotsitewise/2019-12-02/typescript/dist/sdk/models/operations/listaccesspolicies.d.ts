import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of identity (IAM Identity Center user, IAM Identity Center group, or IAM user). This parameter is required if you specify <code>identityId</code>.
 */
export declare enum ListAccessPoliciesIdentityTypeEnum {
    User = "USER",
    Group = "GROUP",
    Iam = "IAM"
}
/**
 * The type of resource (portal or project). This parameter is required if you specify <code>resourceId</code>.
 */
export declare enum ListAccessPoliciesResourceTypeEnum {
    Portal = "PORTAL",
    Project = "PROJECT"
}
export declare class ListAccessPoliciesRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ARN of the IAM user. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM ARNs</a> in the <i>IAM User Guide</i>. This parameter is required if you specify <code>IAM</code> for <code>identityType</code>.
     */
    iamArn?: string;
    /**
     * The ID of the identity. This parameter is required if you specify <code>USER</code> or <code>GROUP</code> for <code>identityType</code>.
     */
    identityId?: string;
    /**
     * The type of identity (IAM Identity Center user, IAM Identity Center group, or IAM user). This parameter is required if you specify <code>identityId</code>.
     */
    identityType?: ListAccessPoliciesIdentityTypeEnum;
    /**
     * <p>The maximum number of results to return for each paginated request.</p> <p>Default: 50</p>
     */
    maxResults?: number;
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: string;
    /**
     * The ID of the resource. This parameter is required if you specify <code>resourceType</code>.
     */
    resourceId?: string;
    /**
     * The type of resource (portal or project). This parameter is required if you specify <code>resourceId</code>.
     */
    resourceType?: ListAccessPoliciesResourceTypeEnum;
}
export declare class ListAccessPoliciesResponse extends SpeakeasyBase {
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
    listAccessPoliciesResponse?: shared.ListAccessPoliciesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
