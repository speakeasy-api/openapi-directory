import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object representing an identity provider configuration.
 */
export declare class DescribeIdentityProviderConfigRequestBodyIdentityProviderConfig extends SpeakeasyBase {
    name?: string;
    type?: string;
}
export declare class DescribeIdentityProviderConfigRequestBody extends SpeakeasyBase {
    /**
     * An object representing an identity provider configuration.
     */
    identityProviderConfig: DescribeIdentityProviderConfigRequestBodyIdentityProviderConfig;
}
export declare class DescribeIdentityProviderConfigRequest extends SpeakeasyBase {
    requestBody: DescribeIdentityProviderConfigRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The cluster name that the identity provider configuration is associated to.
     */
    name: string;
}
export declare class DescribeIdentityProviderConfigResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    describeIdentityProviderConfigResponse?: shared.DescribeIdentityProviderConfigResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServerException
     */
    serverException?: any;
}
