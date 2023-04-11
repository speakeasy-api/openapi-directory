import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateContactListRequestBody extends SpeakeasyBase {
    /**
     * A description of what the contact list is about.
     */
    description?: string;
    /**
     * An interest group, theme, or label within a list. A contact list can have multiple topics.
     */
    topics?: shared.Topic[];
}
export declare class UpdateContactListRequest extends SpeakeasyBase {
    /**
     * The name of the contact list.
     */
    contactListName: string;
    requestBody: UpdateContactListRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateContactListResponse extends SpeakeasyBase {
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
    updateContactListResponse?: Record<string, any>;
}
