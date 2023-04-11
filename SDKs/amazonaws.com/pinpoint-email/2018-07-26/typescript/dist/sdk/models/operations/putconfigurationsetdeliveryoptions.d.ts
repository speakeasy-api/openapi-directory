import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established.
 */
export declare enum PutConfigurationSetDeliveryOptionsRequestBodyTlsPolicyEnum {
    Require = "REQUIRE",
    Optional = "OPTIONAL"
}
export declare class PutConfigurationSetDeliveryOptionsRequestBody extends SpeakeasyBase {
    /**
     * The name of the dedicated IP pool that you want to associate with the configuration set.
     */
    sendingPoolName?: string;
    /**
     * Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established.
     */
    tlsPolicy?: PutConfigurationSetDeliveryOptionsRequestBodyTlsPolicyEnum;
}
export declare class PutConfigurationSetDeliveryOptionsRequest extends SpeakeasyBase {
    /**
     * The name of the configuration set that you want to associate with a dedicated IP pool.
     */
    configurationSetName: string;
    requestBody: PutConfigurationSetDeliveryOptionsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutConfigurationSetDeliveryOptionsResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * Success
     */
    putConfigurationSetDeliveryOptionsResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
