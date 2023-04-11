import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListContactsRequestBody extends SpeakeasyBase {
    /**
     * End time of a contact in UTC.
     */
    endTime: Date;
    /**
     * Name of a ground station.
     */
    groundStation?: string;
    /**
     * Maximum number of contacts returned.
     */
    maxResults?: number;
    /**
     * ARN of a mission profile.
     */
    missionProfileArn?: string;
    /**
     * Next token returned in the request of a previous <code>ListContacts</code> call. Used to get the next page of results.
     */
    nextToken?: string;
    /**
     * ARN of a satellite.
     */
    satelliteArn?: string;
    /**
     * Start time of a contact in UTC.
     */
    startTime: Date;
    /**
     * Status of a contact reservation.
     */
    statusList: shared.ContactStatusEnum[];
}
export declare class ListContactsRequest extends SpeakeasyBase {
    requestBody: ListContactsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListContactsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DependencyException
     */
    dependencyException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    listContactsResponse?: shared.ListContactsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
