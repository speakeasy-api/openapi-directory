import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of the address you request.
 */
export declare enum GetSiteAddressAddressTypeEnum {
    ShippingAddress = "SHIPPING_ADDRESS",
    OperatingAddress = "OPERATING_ADDRESS"
}
export declare class GetSiteAddressRequest extends SpeakeasyBase {
    /**
     * The type of the address you request.
     */
    addressType: GetSiteAddressAddressTypeEnum;
    /**
     *  The ID or the Amazon Resource Name (ARN) of the site.
     */
    siteId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSiteAddressResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getSiteAddressOutput?: shared.GetSiteAddressOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
