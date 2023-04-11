import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object representing an identity provider configuration.
 */
export declare class DisassociateIdentityProviderConfigRequestBodyIdentityProviderConfig extends SpeakeasyBase {
    name?: string;
    type?: string;
}
export declare class DisassociateIdentityProviderConfigRequestBody extends SpeakeasyBase {
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: string;
    /**
     * An object representing an identity provider configuration.
     */
    identityProviderConfig: DisassociateIdentityProviderConfigRequestBodyIdentityProviderConfig;
}
export declare class DisassociateIdentityProviderConfigRequest extends SpeakeasyBase {
    requestBody: DisassociateIdentityProviderConfigRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the cluster to disassociate an identity provider from.
     */
    name: string;
}
export declare class DisassociateIdentityProviderConfigResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    disassociateIdentityProviderConfigResponse?: shared.DisassociateIdentityProviderConfigResponse;
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
