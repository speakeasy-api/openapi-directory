import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddLayerVersionPermissionRequestBody extends SpeakeasyBase {
    /**
     * The API action that grants access to the layer. For example, <code>lambda:GetLayerVersion</code>.
     */
    action: string;
    /**
     * With the principal set to <code>*</code>, grant permission to all accounts in the specified organization.
     */
    organizationId?: string;
    /**
     * An account ID, or <code>*</code> to grant layer usage permission to all accounts in an organization, or all Amazon Web Services accounts (if <code>organizationId</code> is not specified). For the last case, make sure that you really do want all Amazon Web Services accounts to have usage permission to this layer.
     */
    principal: string;
    /**
     * An identifier that distinguishes the policy from others on the same layer version.
     */
    statementId: string;
}
export declare class AddLayerVersionPermissionRequest extends SpeakeasyBase {
    /**
     * The name or Amazon Resource Name (ARN) of the layer.
     */
    layerName: string;
    requestBody: AddLayerVersionPermissionRequestBody;
    /**
     * Only update the policy if the revision ID matches the ID specified. Use this option to avoid modifying a policy that has changed since you last read it.
     */
    revisionId?: string;
    /**
     * The version number.
     */
    versionNumber: number;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AddLayerVersionPermissionResponse extends SpeakeasyBase {
    /**
     * Success
     */
    addLayerVersionPermissionResponse?: shared.AddLayerVersionPermissionResponse;
    contentType: string;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * PolicyLengthExceededException
     */
    policyLengthExceededException?: any;
    /**
     * PreconditionFailedException
     */
    preconditionFailedException?: any;
    /**
     * ResourceConflictException
     */
    resourceConflictException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
