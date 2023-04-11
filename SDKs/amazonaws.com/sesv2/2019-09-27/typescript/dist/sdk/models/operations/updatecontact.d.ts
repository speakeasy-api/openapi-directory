import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateContactRequestBody extends SpeakeasyBase {
    /**
     * The attribute data attached to a contact.
     */
    attributesData?: string;
    /**
     * The contact's preference for being opted-in to or opted-out of a topic.
     */
    topicPreferences?: shared.TopicPreference[];
    /**
     * A boolean value status noting if the contact is unsubscribed from all contact list topics.
     */
    unsubscribeAll?: boolean;
}
export declare class UpdateContactRequest extends SpeakeasyBase {
    /**
     * The name of the contact list.
     */
    contactListName: string;
    /**
     * The contact's email addres.
     */
    emailAddress: string;
    requestBody: UpdateContactRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateContactResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
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
    /**
     * Success
     */
    updateContactResponse?: Record<string, any>;
}
