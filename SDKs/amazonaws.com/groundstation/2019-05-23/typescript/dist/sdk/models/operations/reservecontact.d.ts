import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReserveContactRequestBody extends SpeakeasyBase {
    /**
     * End time of a contact in UTC.
     */
    endTime: Date;
    /**
     * Name of a ground station.
     */
    groundStation: string;
    /**
     * ARN of a mission profile.
     */
    missionProfileArn: string;
    /**
     * ARN of a satellite
     */
    satelliteArn: string;
    /**
     * Start time of a contact in UTC.
     */
    startTime: Date;
    /**
     * Tags assigned to a contact.
     */
    tags?: Record<string, string>;
}
export declare class ReserveContactRequest extends SpeakeasyBase {
    requestBody: ReserveContactRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ReserveContactResponse extends SpeakeasyBase {
    /**
     * Success
     */
    contactIdResponse?: shared.ContactIdResponse;
    contentType: string;
    /**
     * DependencyException
     */
    dependencyException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
