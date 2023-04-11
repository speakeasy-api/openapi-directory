import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Describes the certificate mode in which the Certificate Authority (CA) will be registered. If the <code>verificationCertificate</code> field is not provided, set <code>certificateMode</code> to be <code>SNI_ONLY</code>. If the <code>verificationCertificate</code> field is provided, set <code>certificateMode</code> to be <code>DEFAULT</code>. When <code>certificateMode</code> is not provided, it defaults to <code>DEFAULT</code>. All the device certificates that are registered using this CA will be registered in the same certificate mode as the CA. For more information about certificate mode for device certificates, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_CertificateDescription.html#iot-Type-CertificateDescription-certificateMode"> certificate mode</a>.
 */
export declare enum RegisterCACertificateRequestBodyCertificateModeEnum {
    Default = "DEFAULT",
    SniOnly = "SNI_ONLY"
}
/**
 * The registration configuration.
 */
export declare class RegisterCACertificateRequestBodyRegistrationConfig extends SpeakeasyBase {
    roleArn?: string;
    templateBody?: string;
    templateName?: string;
}
export declare class RegisterCACertificateRequestBody extends SpeakeasyBase {
    /**
     * The PEM of a certificate.
     */
    caCertificate: string;
    /**
     * Describes the certificate mode in which the Certificate Authority (CA) will be registered. If the <code>verificationCertificate</code> field is not provided, set <code>certificateMode</code> to be <code>SNI_ONLY</code>. If the <code>verificationCertificate</code> field is provided, set <code>certificateMode</code> to be <code>DEFAULT</code>. When <code>certificateMode</code> is not provided, it defaults to <code>DEFAULT</code>. All the device certificates that are registered using this CA will be registered in the same certificate mode as the CA. For more information about certificate mode for device certificates, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_CertificateDescription.html#iot-Type-CertificateDescription-certificateMode"> certificate mode</a>.
     */
    certificateMode?: RegisterCACertificateRequestBodyCertificateModeEnum;
    /**
     * The registration configuration.
     */
    registrationConfig?: RegisterCACertificateRequestBodyRegistrationConfig;
    /**
     * <p>Metadata which can be used to manage the CA certificate.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note>
     */
    tags?: shared.Tag[];
    /**
     * The PEM of a certificate.
     */
    verificationCertificate?: string;
}
export declare class RegisterCACertificateRequest extends SpeakeasyBase {
    requestBody: RegisterCACertificateRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Allows this CA certificate to be used for auto registration of device certificates.
     */
    allowAutoRegistration?: boolean;
    /**
     * <p>A boolean value that specifies if the CA certificate is set to active.</p> <p>Valid values: <code>ACTIVE | INACTIVE</code> </p>
     */
    setAsActive?: boolean;
}
export declare class RegisterCACertificateResponse extends SpeakeasyBase {
    /**
     * CertificateValidationException
     */
    certificateValidationException?: any;
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
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * Success
     */
    registerCACertificateResponse?: shared.RegisterCACertificateResponse;
    /**
     * RegistrationCodeValidationException
     */
    registrationCodeValidationException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
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
