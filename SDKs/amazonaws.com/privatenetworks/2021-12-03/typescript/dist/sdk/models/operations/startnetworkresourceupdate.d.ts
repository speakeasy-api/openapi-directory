import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information about an address.
 */
export declare class StartNetworkResourceUpdateRequestBodyShippingAddress extends SpeakeasyBase {
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
/**
 * <p>The update type.</p> <ul> <li> <p> <code>REPLACE</code> - Submits a request to replace a defective radio unit. We provide a shipping label that you can use for the return process and we ship a replacement radio unit to you.</p> </li> <li> <p> <code>RETURN</code> - Submits a request to replace a radio unit that you no longer need. We provide a shipping label that you can use for the return process.</p> </li> </ul>
 */
export declare enum StartNetworkResourceUpdateRequestBodyUpdateTypeEnum {
    Replace = "REPLACE",
    Return = "RETURN"
}
export declare class StartNetworkResourceUpdateRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the network resource.
     */
    networkResourceArn: string;
    /**
     * The reason for the return. Providing a reason for a return is optional.
     */
    returnReason?: string;
    /**
     * Information about an address.
     */
    shippingAddress?: StartNetworkResourceUpdateRequestBodyShippingAddress;
    /**
     * <p>The update type.</p> <ul> <li> <p> <code>REPLACE</code> - Submits a request to replace a defective radio unit. We provide a shipping label that you can use for the return process and we ship a replacement radio unit to you.</p> </li> <li> <p> <code>RETURN</code> - Submits a request to replace a radio unit that you no longer need. We provide a shipping label that you can use for the return process.</p> </li> </ul>
     */
    updateType: StartNetworkResourceUpdateRequestBodyUpdateTypeEnum;
}
export declare class StartNetworkResourceUpdateRequest extends SpeakeasyBase {
    requestBody: StartNetworkResourceUpdateRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartNetworkResourceUpdateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    startNetworkResourceUpdateResponse?: shared.StartNetworkResourceUpdateResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
