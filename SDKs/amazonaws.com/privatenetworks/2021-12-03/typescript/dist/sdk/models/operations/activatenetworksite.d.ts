import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information about an address.
 */
export declare class ActivateNetworkSiteRequestBodyShippingAddress extends SpeakeasyBase {
    city?: string;
    company?: string;
    country?: string;
    name?: string;
    phoneNumber?: string;
    postalCode?: string;
    stateOrProvince?: string;
    street1?: string;
    street2?: string;
    street3?: string;
}
export declare class ActivateNetworkSiteRequestBody extends SpeakeasyBase {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure idempotency</a>.
     */
    clientToken?: string;
    /**
     * The Amazon Resource Name (ARN) of the network site.
     */
    networkSiteArn: string;
    /**
     * Information about an address.
     */
    shippingAddress: ActivateNetworkSiteRequestBodyShippingAddress;
}
export declare class ActivateNetworkSiteRequest extends SpeakeasyBase {
    requestBody: ActivateNetworkSiteRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ActivateNetworkSiteResponse extends SpeakeasyBase {
    /**
     * Success
     */
    activateNetworkSiteResponse?: shared.ActivateNetworkSiteResponse;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
