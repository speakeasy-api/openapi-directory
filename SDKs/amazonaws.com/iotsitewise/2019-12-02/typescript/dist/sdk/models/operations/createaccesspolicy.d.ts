import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * <p>Contains an identity that can access an IoT SiteWise Monitor resource.</p> <note> <p>Currently, you can't use Amazon Web Services APIs to retrieve IAM Identity Center identity IDs. You can find the IAM Identity Center identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">IAM Identity Center console</a>.</p> </note>
 */
export declare class CreateAccessPolicyRequestBodyAccessPolicyIdentity extends SpeakeasyBase {
    group?: shared.GroupIdentity;
    iamRole?: shared.IAMRoleIdentity;
    iamUser?: shared.IAMUserIdentity;
    user?: shared.UserIdentity;
}
/**
 * The permission level for this access policy. Note that a project <code>ADMINISTRATOR</code> is also known as a project owner.
 */
export declare enum CreateAccessPolicyRequestBodyAccessPolicyPermissionEnum {
    Administrator = "ADMINISTRATOR",
    Viewer = "VIEWER"
}
/**
 * Contains an IoT SiteWise Monitor resource ID for a portal or project.
 */
export declare class CreateAccessPolicyRequestBodyAccessPolicyResource extends SpeakeasyBase {
    portal?: shared.PortalResource;
    project?: shared.ProjectResource;
}
export declare class CreateAccessPolicyRequestBody extends SpeakeasyBase {
    /**
     * <p>Contains an identity that can access an IoT SiteWise Monitor resource.</p> <note> <p>Currently, you can't use Amazon Web Services APIs to retrieve IAM Identity Center identity IDs. You can find the IAM Identity Center identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">IAM Identity Center console</a>.</p> </note>
     */
    accessPolicyIdentity: CreateAccessPolicyRequestBodyAccessPolicyIdentity;
    /**
     * The permission level for this access policy. Note that a project <code>ADMINISTRATOR</code> is also known as a project owner.
     */
    accessPolicyPermission: CreateAccessPolicyRequestBodyAccessPolicyPermissionEnum;
    /**
     * Contains an IoT SiteWise Monitor resource ID for a portal or project.
     */
    accessPolicyResource: CreateAccessPolicyRequestBodyAccessPolicyResource;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: string;
    /**
     * A list of key-value pairs that contain metadata for the access policy. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.
     */
    tags?: Record<string, string>;
}
export declare class CreateAccessPolicyRequest extends SpeakeasyBase {
    requestBody: CreateAccessPolicyRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateAccessPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createAccessPolicyResponse?: shared.CreateAccessPolicyResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
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
