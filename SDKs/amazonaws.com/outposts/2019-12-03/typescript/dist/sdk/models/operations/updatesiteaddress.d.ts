import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  Information about an address.
 */
export declare class UpdateSiteAddressRequestBodyAddress extends SpeakeasyBase {
    addressLine1?: string;
    addressLine2?: string;
    addressLine3?: string;
    city?: string;
    contactName?: string;
    contactPhoneNumber?: string;
    countryCode?: string;
    districtOrCounty?: string;
    municipality?: string;
    postalCode?: string;
    stateOrRegion?: string;
}
/**
 *  The type of the address.
 */
export declare enum UpdateSiteAddressRequestBodyAddressTypeEnum {
    ShippingAddress = "SHIPPING_ADDRESS",
    OperatingAddress = "OPERATING_ADDRESS"
}
export declare class UpdateSiteAddressRequestBody extends SpeakeasyBase {
    /**
     *  Information about an address.
     */
    address: UpdateSiteAddressRequestBodyAddress;
    /**
     *  The type of the address.
     */
    addressType: UpdateSiteAddressRequestBodyAddressTypeEnum;
}
export declare class UpdateSiteAddressRequest extends SpeakeasyBase {
    requestBody: UpdateSiteAddressRequestBody;
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
export declare class UpdateSiteAddressResponse extends SpeakeasyBase {
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
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateSiteAddressOutput?: shared.UpdateSiteAddressOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
