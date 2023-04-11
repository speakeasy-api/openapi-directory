import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A duplicate customer profile that is to be merged into a main profile.
 */
export declare class MergeProfilesRequestBodyFieldSourceProfileIds extends SpeakeasyBase {
    accountNumber?: string;
    additionalInformation?: string;
    address?: string;
    attributes?: Record<string, string>;
    billingAddress?: string;
    birthDate?: string;
    businessEmailAddress?: string;
    businessName?: string;
    businessPhoneNumber?: string;
    emailAddress?: string;
    firstName?: string;
    gender?: string;
    homePhoneNumber?: string;
    lastName?: string;
    mailingAddress?: string;
    middleName?: string;
    mobilePhoneNumber?: string;
    partyType?: string;
    personalEmailAddress?: string;
    phoneNumber?: string;
    shippingAddress?: string;
}
export declare class MergeProfilesRequestBody extends SpeakeasyBase {
    /**
     * A duplicate customer profile that is to be merged into a main profile.
     */
    fieldSourceProfileIds?: MergeProfilesRequestBodyFieldSourceProfileIds;
    /**
     * The identifier of the profile to be taken.
     */
    mainProfileId: string;
    /**
     * The identifier of the profile to be merged into MainProfileId.
     */
    profileIdsToBeMerged: string[];
}
export declare class MergeProfilesRequest extends SpeakeasyBase {
    /**
     * The unique name of the domain.
     */
    domainName: string;
    requestBody: MergeProfilesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class MergeProfilesResponse extends SpeakeasyBase {
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
     * Success
     */
    mergeProfilesResponse?: shared.MergeProfilesResponse;
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
