import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * <p>Contains an identity that can access an IoT SiteWise Monitor resource.</p> <note> <p>Currently, you can't use Amazon Web Services APIs to retrieve IAM Identity Center identity IDs. You can find the IAM Identity Center identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">IAM Identity Center console</a>.</p> </note>
 */
export declare class UpdateAccessPolicyRequestBodyAccessPolicyIdentity extends SpeakeasyBase {
    group?: shared.GroupIdentity;
    iamRole?: shared.IAMRoleIdentity;
    iamUser?: shared.IAMUserIdentity;
    user?: shared.UserIdentity;
}
/**
 * The permission level for this access policy. Note that a project <code>ADMINISTRATOR</code> is also known as a project owner.
 */
export declare enum UpdateAccessPolicyRequestBodyAccessPolicyPermissionEnum {
    Administrator = "ADMINISTRATOR",
    Viewer = "VIEWER"
}
/**
 * Contains an IoT SiteWise Monitor resource ID for a portal or project.
 */
export declare class UpdateAccessPolicyRequestBodyAccessPolicyResource extends SpeakeasyBase {
    portal?: shared.PortalResource;
    project?: shared.ProjectResource;
}
export declare class UpdateAccessPolicyRequestBody extends SpeakeasyBase {
    /**
     * <p>Contains an identity that can access an IoT SiteWise Monitor resource.</p> <note> <p>Currently, you can't use Amazon Web Services APIs to retrieve IAM Identity Center identity IDs. You can find the IAM Identity Center identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">IAM Identity Center console</a>.</p> </note>
     */
    accessPolicyIdentity: UpdateAccessPolicyRequestBodyAccessPolicyIdentity;
    /**
     * The permission level for this access policy. Note that a project <code>ADMINISTRATOR</code> is also known as a project owner.
     */
    accessPolicyPermission: UpdateAccessPolicyRequestBodyAccessPolicyPermissionEnum;
    /**
     * Contains an IoT SiteWise Monitor resource ID for a portal or project.
     */
    accessPolicyResource: UpdateAccessPolicyRequestBodyAccessPolicyResource;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: string;
}
export declare class UpdateAccessPolicyRequest extends SpeakeasyBase {
    requestBody: UpdateAccessPolicyRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the access policy.
     */
    accessPolicyId: string;
}
export declare class UpdateAccessPolicyResponse extends SpeakeasyBase {
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
     * Success
     */
    updateAccessPolicyResponse?: Record<string, any>;
}
