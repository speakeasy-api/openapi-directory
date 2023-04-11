import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A structure containing information about how this workspace works with SAML.
 */
export declare class UpdateWorkspaceAuthenticationRequestBodySamlConfiguration extends SpeakeasyBase {
    allowedOrganizations?: string[];
    assertionAttributes?: shared.AssertionAttributes;
    idpMetadata?: shared.IdpMetadata;
    loginValidityDuration?: number;
    roleValues?: shared.RoleValues;
}
export declare class UpdateWorkspaceAuthenticationRequestBody extends SpeakeasyBase {
    /**
     * Specifies whether this workspace uses SAML 2.0, IAM Identity Center (successor to Single Sign-On), or both to authenticate users for using the Grafana console within a workspace. For more information, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/authentication-in-AMG.html">User authentication in Amazon Managed Grafana</a>.
     */
    authenticationProviders: shared.AuthenticationProviderTypesEnum[];
    /**
     * A structure containing information about how this workspace works with SAML.
     */
    samlConfiguration?: UpdateWorkspaceAuthenticationRequestBodySamlConfiguration;
}
export declare class UpdateWorkspaceAuthenticationRequest extends SpeakeasyBase {
    requestBody: UpdateWorkspaceAuthenticationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the workspace to update the authentication for.
     */
    workspaceId: string;
}
export declare class UpdateWorkspaceAuthenticationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
    /**
     * Success
     */
    updateWorkspaceAuthenticationResponse?: shared.UpdateWorkspaceAuthenticationResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
