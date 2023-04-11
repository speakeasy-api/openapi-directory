import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object representing an OpenID Connect (OIDC) configuration. Before associating an OIDC identity provider to your cluster, review the considerations in <a href="https://docs.aws.amazon.com/eks/latest/userguide/authenticate-oidc-identity-provider.html">Authenticating users for your cluster from an OpenID Connect identity provider</a> in the <i>Amazon EKS User Guide</i>.
 */
export declare class AssociateIdentityProviderConfigRequestBodyOidc extends SpeakeasyBase {
    clientId?: string;
    groupsClaim?: string;
    groupsPrefix?: string;
    identityProviderConfigName?: string;
    issuerUrl?: string;
    requiredClaims?: Record<string, string>;
    usernameClaim?: string;
    usernamePrefix?: string;
}
export declare class AssociateIdentityProviderConfigRequestBody extends SpeakeasyBase {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: string;
    /**
     * An object representing an OpenID Connect (OIDC) configuration. Before associating an OIDC identity provider to your cluster, review the considerations in <a href="https://docs.aws.amazon.com/eks/latest/userguide/authenticate-oidc-identity-provider.html">Authenticating users for your cluster from an OpenID Connect identity provider</a> in the <i>Amazon EKS User Guide</i>.
     */
    oidc: AssociateIdentityProviderConfigRequestBodyOidc;
    /**
     * The metadata to apply to the configuration to assist with categorization and organization. Each tag consists of a key and an optional value. You define both.
     */
    tags?: Record<string, string>;
}
export declare class AssociateIdentityProviderConfigRequest extends SpeakeasyBase {
    requestBody: AssociateIdentityProviderConfigRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the cluster to associate the configuration to.
     */
    name: string;
}
export declare class AssociateIdentityProviderConfigResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateIdentityProviderConfigResponse?: shared.AssociateIdentityProviderConfigResponse;
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
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
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ServerException
     */
    serverException?: any;
}
