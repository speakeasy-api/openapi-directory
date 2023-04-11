import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A generic address associated with the customer that is not mailing, shipping, or billing.
 */
export declare class CreateProfileRequestBodyAddress extends SpeakeasyBase {
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
 * A generic address associated with the customer that is not mailing, shipping, or billing.
 */
export declare class CreateProfileRequestBodyBillingAddress extends SpeakeasyBase {
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
export declare enum CreateProfileRequestBodyGenderEnum {
    Male = "MALE",
    Female = "FEMALE",
    Unspecified = "UNSPECIFIED"
}
/**
 * A generic address associated with the customer that is not mailing, shipping, or billing.
 */
export declare class CreateProfileRequestBodyMailingAddress extends SpeakeasyBase {
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
export declare enum CreateProfileRequestBodyPartyTypeEnum {
    Individual = "INDIVIDUAL",
    Business = "BUSINESS",
    Other = "OTHER"
}
/**
 * A generic address associated with the customer that is not mailing, shipping, or billing.
 */
export declare class CreateProfileRequestBodyShippingAddress extends SpeakeasyBase {
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
export declare class CreateProfileRequestBody extends SpeakeasyBase {
    /**
     * A unique account number that you have given to the customer.
     */
    accountNumber?: string;
    /**
     * Any additional information relevant to the customer’s profile.
     */
    additionalInformation?: string;
    /**
     * A generic address associated with the customer that is not mailing, shipping, or billing.
     */
    address?: CreateProfileRequestBodyAddress;
    /**
     * A key value pair of attributes of a customer profile.
     */
    attributes?: Record<string, string>;
    /**
     * A generic address associated with the customer that is not mailing, shipping, or billing.
     */
    billingAddress?: CreateProfileRequestBodyBillingAddress;
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
    gender?: CreateProfileRequestBodyGenderEnum;
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
     * A generic address associated with the customer that is not mailing, shipping, or billing.
     */
    mailingAddress?: CreateProfileRequestBodyMailingAddress;
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
    partyType?: CreateProfileRequestBodyPartyTypeEnum;
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
     * A generic address associated with the customer that is not mailing, shipping, or billing.
     */
    shippingAddress?: CreateProfileRequestBodyShippingAddress;
}
export declare class CreateProfileRequest extends SpeakeasyBase {
    /**
     * The unique name of the domain.
     */
    domainName: string;
    requestBody: CreateProfileRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateProfileResponse extends SpeakeasyBase {
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
     * Success
     */
    createProfileResponse?: shared.CreateProfileResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
