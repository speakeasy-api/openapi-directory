import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GETPutConfigurationSetDeliveryOptionsActionEnum {
    PutConfigurationSetDeliveryOptions = "PutConfigurationSetDeliveryOptions"
}
/**
 * Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).
 */
export declare class GETPutConfigurationSetDeliveryOptionsDeliveryOptions extends SpeakeasyBase {
    tlsPolicy?: shared.TlsPolicyEnum;
}
export declare enum GETPutConfigurationSetDeliveryOptionsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETPutConfigurationSetDeliveryOptionsRequest extends SpeakeasyBase {
    action: GETPutConfigurationSetDeliveryOptionsActionEnum;
    /**
     * The name of the configuration set that you want to specify the delivery options for.
     */
    configurationSetName: string;
    /**
     * Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).
     */
    deliveryOptions?: GETPutConfigurationSetDeliveryOptionsDeliveryOptions;
    version: GETPutConfigurationSetDeliveryOptionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETPutConfigurationSetDeliveryOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
