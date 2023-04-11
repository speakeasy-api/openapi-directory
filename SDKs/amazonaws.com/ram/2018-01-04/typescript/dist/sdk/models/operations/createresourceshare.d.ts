import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateResourceShareRequestBody extends SpeakeasyBase {
    /**
     * Specifies whether principals outside your organization in Organizations can be associated with a resource share. A value of <code>true</code> lets you share with individual Amazon Web Services accounts that are <i>not</i> in your organization. A value of <code>false</code> only has meaning if your account is a member of an Amazon Web Services Organization. The default value is <code>true</code>.
     */
    allowExternalPrincipals?: boolean;
    /**
     * <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p>
     */
    clientToken?: string;
    /**
     * Specifies the name of the resource share.
     */
    name: string;
    /**
     * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of the RAM permission to associate with the resource share. If you do not specify an ARN for the permission, RAM automatically attaches the default version of the permission for each resource type. You can associate only one permission with each resource type included in the resource share.
     */
    permissionArns?: string[];
    /**
     * <p>Specifies a list of one or more principals to associate with the resource share.</p> <p>You can include the following values:</p> <ul> <li> <p>An Amazon Web Services account ID, for example: <code>123456789012</code> </p> </li> <li> <p>An <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of an organization in Organizations, for example: <code>organizations::123456789012:organization/o-exampleorgid</code> </p> </li> <li> <p>An ARN of an organizational unit (OU) in Organizations, for example: <code>organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123</code> </p> </li> <li> <p>An ARN of an IAM role, for example: <code>iam::123456789012:role/rolename</code> </p> </li> <li> <p>An ARN of an IAM user, for example: <code>iam::123456789012user/username</code> </p> </li> </ul> <note> <p>Not all resource types can be shared with IAM roles and users. For more information, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/permissions.html#permissions-rbp-supported-resource-types">Sharing with IAM roles and users</a> in the <i>Resource Access Manager User Guide</i>.</p> </note>
     */
    principals?: string[];
    /**
     * Specifies a list of one or more ARNs of the resources to associate with the resource share.
     */
    resourceArns?: string[];
    /**
     * Specifies one or more tags to attach to the resource share itself. It doesn't attach the tags to the resources associated with the resource share.
     */
    tags?: shared.Tag[];
}
export declare class CreateResourceShareRequest extends SpeakeasyBase {
    requestBody: CreateResourceShareRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateResourceShareResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createResourceShareResponse?: shared.CreateResourceShareResponse;
    /**
     * IdempotentParameterMismatchException
     */
    idempotentParameterMismatchException?: any;
    /**
     * InvalidClientTokenException
     */
    invalidClientTokenException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidStateTransitionException
     */
    invalidStateTransitionException?: any;
    /**
     * MalformedArnException
     */
    malformedArnException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    /**
     * ResourceShareLimitExceededException
     */
    resourceShareLimitExceededException?: any;
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
     * TagPolicyViolationException
     */
    tagPolicyViolationException?: any;
    /**
     * UnknownResourceException
     */
    unknownResourceException?: any;
}
