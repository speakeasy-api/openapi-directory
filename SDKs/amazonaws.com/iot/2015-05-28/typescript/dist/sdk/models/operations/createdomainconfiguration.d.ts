import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object that specifies the authorization service for a domain.
 */
export declare class CreateDomainConfigurationRequestBodyAuthorizerConfig extends SpeakeasyBase {
    allowAuthorizerOverride?: boolean;
    defaultAuthorizerName?: string;
}
/**
 * <p>The type of service delivered by the endpoint.</p> <note> <p>Amazon Web Services IoT Core currently supports only the <code>DATA</code> service type.</p> </note>
 */
export declare enum CreateDomainConfigurationRequestBodyServiceTypeEnum {
    Data = "DATA",
    CredentialProvider = "CREDENTIAL_PROVIDER",
    Jobs = "JOBS"
}
export declare class CreateDomainConfigurationRequestBody extends SpeakeasyBase {
    /**
     * An object that specifies the authorization service for a domain.
     */
    authorizerConfig?: CreateDomainConfigurationRequestBodyAuthorizerConfig;
    /**
     * The name of the domain.
     */
    domainName?: string;
    /**
     * The ARNs of the certificates that IoT passes to the device during the TLS handshake. Currently you can specify only one certificate ARN. This value is not required for Amazon Web Services-managed domains.
     */
    serverCertificateArns?: string[];
    /**
     * <p>The type of service delivered by the endpoint.</p> <note> <p>Amazon Web Services IoT Core currently supports only the <code>DATA</code> service type.</p> </note>
     */
    serviceType?: CreateDomainConfigurationRequestBodyServiceTypeEnum;
    /**
     * <p>Metadata which can be used to manage the domain configuration.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note>
     */
    tags?: shared.Tag[];
    /**
     * The certificate used to validate the server certificate and prove domain name ownership. This certificate must be signed by a public certificate authority. This value is not required for Amazon Web Services-managed domains.
     */
    validationCertificateArn?: string;
}
export declare class CreateDomainConfigurationRequest extends SpeakeasyBase {
    requestBody: CreateDomainConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the domain configuration. This value must be unique to a region.
     */
    domainConfigurationName: string;
}
export declare class CreateDomainConfigurationResponse extends SpeakeasyBase {
    /**
     * CertificateValidationException
     */
    certificateValidationException?: any;
    contentType: string;
    /**
     * Success
     */
    createDomainConfigurationResponse?: shared.CreateDomainConfigurationResponse;
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
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
