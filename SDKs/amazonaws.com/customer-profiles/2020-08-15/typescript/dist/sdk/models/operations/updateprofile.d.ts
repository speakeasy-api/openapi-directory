import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Updates associated with the address properties of a customer profile.
 */
export declare class UpdateProfileRequestBodyAddress extends SpeakeasyBase {
    address1?: string;
    address2?: string;
    address3?: string;
    address4?: string;
    city?: string;
    country?: string;
    county?: string;
    postalCode?: string;
    province?: string;
    state?: string;
}
/**
 * Updates associated with the address properties of a customer profile.
 */
export declare class UpdateProfileRequestBodyBillingAddress extends SpeakeasyBase {
    address1?: string;
    address2?: string;
    address3?: string;
    address4?: string;
    city?: string;
    country?: string;
    county?: string;
    postalCode?: string;
    province?: string;
    state?: string;
}
/**
 * The gender with which the customer identifies.
 */
export declare enum UpdateProfileRequestBodyGenderEnum {
    Male = "MALE",
    Female = "FEMALE",
    Unspecified = "UNSPECIFIED"
}
/**
 * Updates associated with the address properties of a customer profile.
 */
export declare class UpdateProfileRequestBodyMailingAddress extends SpeakeasyBase {
    address1?: string;
    address2?: string;
    address3?: string;
    address4?: string;
    city?: string;
    country?: string;
    county?: string;
    postalCode?: string;
    province?: string;
    state?: string;
}
/**
 * The type of profile used to describe the customer.
 */
export declare enum UpdateProfileRequestBodyPartyTypeEnum {
    Individual = "INDIVIDUAL",
    Business = "BUSINESS",
    Other = "OTHER"
}
/**
 * Updates associated with the address properties of a customer profile.
 */
export declare class UpdateProfileRequestBodyShippingAddress extends SpeakeasyBase {
    address1?: string;
    address2?: string;
    address3?: string;
    address4?: string;
    city?: string;
    country?: string;
    county?: string;
    postalCode?: string;
    province?: string;
    state?: string;
}
export declare class UpdateProfileRequestBody extends SpeakeasyBase {
    /**
     * A unique account number that you have given to the customer.
     */
    accountNumber?: string;
    /**
     * Any additional information relevant to the customer’s profile.
     */
    additionalInformation?: string;
    /**
     * Updates associated with the address properties of a customer profile.
     */
    address?: UpdateProfileRequestBodyAddress;
    /**
     * A key value pair of attributes of a customer profile.
     */
    attributes?: Record<string, string>;
    /**
     * Updates associated with the address properties of a customer profile.
     */
    billingAddress?: UpdateProfileRequestBodyBillingAddress;
    /**
     * The customer’s birth date.
     */
    birthDate?: string;
    /**
     * The customer’s business email address.
     */
    businessEmailAddress?: string;
    /**
     * The name of the customer’s business.
     */
    businessName?: string;
    /**
     * The customer’s business phone number.
     */
    businessPhoneNumber?: string;
    /**
     * The customer’s email address, which has not been specified as a personal or business address.
     */
    emailAddress?: string;
    /**
     * The customer’s first name.
     */
    firstName?: string;
    /**
     * The gender with which the customer identifies.
     */
    gender?: UpdateProfileRequestBodyGenderEnum;
    /**
     * An alternative to <code>Gender</code> which accepts any string as input.
     */
    genderString?: string;
    /**
     * The customer’s home phone number.
     */
    homePhoneNumber?: string;
    /**
     * The customer’s last name.
     */
    lastName?: string;
    /**
     * Updates associated with the address properties of a customer profile.
     */
    mailingAddress?: UpdateProfileRequestBodyMailingAddress;
    /**
     * The customer’s middle name.
     */
    middleName?: string;
    /**
     * The customer’s mobile phone number.
     */
    mobilePhoneNumber?: string;
    /**
     * The type of profile used to describe the customer.
     */
    partyType?: UpdateProfileRequestBodyPartyTypeEnum;
    /**
     * An alternative to <code>PartyType</code> which accepts any string as input.
     */
    partyTypeString?: string;
    /**
     * The customer’s personal email address.
     */
    personalEmailAddress?: string;
    /**
     * The customer’s phone number, which has not been specified as a mobile, home, or business number.
     */
    phoneNumber?: string;
    /**
     * The unique identifier of a customer profile.
     */
    profileId: string;
    /**
     * Updates associated with the address properties of a customer profile.
     */
    shippingAddress?: UpdateProfileRequestBodyShippingAddress;
}
export declare class UpdateProfileRequest extends SpeakeasyBase {
    /**
     * The unique name of the domain.
     */
    domainName: string;
    requestBody: UpdateProfileRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateProfileResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * BadRequestException
     */
    badRequestException?: any;
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
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateProfileResponse?: shared.UpdateProfileResponse;
}
