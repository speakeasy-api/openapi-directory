import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateContactListRequestBody extends SpeakeasyBase {
    /**
     * The name of the contact list.
     */
    contactListName: string;
    /**
     * A description of what the contact list is about.
     */
    description?: string;
    /**
     * The tags associated with a contact list.
     */
    tags?: shared.Tag[];
    /**
     * An interest group, theme, or label within a list. A contact list can have multiple topics.
     */
    topics?: shared.Topic[];
}
export declare class CreateContactListRequest extends SpeakeasyBase {
    requestBody: CreateContactListRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateContactListResponse extends SpeakeasyBase {
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
    createContactListResponse?: Record<string, any>;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
