import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateContactRequestBody extends SpeakeasyBase {
    /**
     * The attribute data attached to a contact.
     */
    attributesData?: string;
    /**
     * The contact's email address.
     */
    emailAddress: string;
    /**
     * The contact's preferences for being opted-in to or opted-out of topics.
     */
    topicPreferences?: shared.TopicPreference[];
    /**
     * A boolean value status noting if the contact is unsubscribed from all contact list topics.
     */
    unsubscribeAll?: boolean;
}
export declare class CreateContactRequest extends SpeakeasyBase {
    /**
     * The name of the contact list to which the contact should be added.
     */
    contactListName: string;
    requestBody: CreateContactRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateContactResponse extends SpeakeasyBase {
    /**
     * AlreadyExistsException
     */
    alreadyExistsException?: any;
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createContactResponse?: Record<string, any>;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
