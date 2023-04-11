import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Details about an identity provider.
 */
export declare class RegisterIdentityProviderRequestBodyIdentityProvider extends SpeakeasyBase {
    activeDirectoryIdentityProvider?: shared.ActiveDirectoryIdentityProvider;
}
/**
 * The registered identity provider’s product related configuration settings such as the subnets to provision VPC endpoints, and the security group ID that is associated with the VPC endpoints. The security group should permit inbound TCP port 1688 communication from resources in the VPC.
 */
export declare class RegisterIdentityProviderRequestBodySettings extends SpeakeasyBase {
    securityGroupId?: string;
    subnets?: string[];
}
export declare class RegisterIdentityProviderRequestBody extends SpeakeasyBase {
    /**
     * Details about an identity provider.
     */
    identityProvider: RegisterIdentityProviderRequestBodyIdentityProvider;
    /**
     * The name of the user-based subscription product.
     */
    product: string;
    /**
     * The registered identity provider’s product related configuration settings such as the subnets to provision VPC endpoints, and the security group ID that is associated with the VPC endpoints. The security group should permit inbound TCP port 1688 communication from resources in the VPC.
     */
    settings?: RegisterIdentityProviderRequestBodySettings;
}
export declare class RegisterIdentityProviderRequest extends SpeakeasyBase {
    requestBody: RegisterIdentityProviderRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RegisterIdentityProviderResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    registerIdentityProviderResponse?: shared.RegisterIdentityProviderResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
