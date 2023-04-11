import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListEphemeridesRequestBody extends SpeakeasyBase {
    /**
     * The end time to list in UTC. The operation will return an ephemeris if its expiration time is within the time range defined by the <code>startTime</code> and <code>endTime</code>.
     */
    endTime: Date;
    /**
     * The AWS Ground Station satellite ID to list ephemeris for.
     */
    satelliteId: string;
    /**
     * The start time to list in UTC. The operation will return an ephemeris if its expiration time is within the time range defined by the <code>startTime</code> and <code>endTime</code>.
     */
    startTime: Date;
    /**
     * The list of ephemeris status to return.
     */
    statusList?: shared.EphemerisStatusEnum[];
}
export declare class ListEphemeridesRequest extends SpeakeasyBase {
    requestBody: ListEphemeridesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Maximum number of ephemerides to return.
     */
    maxResults?: number;
    /**
     * Pagination token.
     */
    nextToken?: string;
}
export declare class ListEphemeridesResponse extends SpeakeasyBase {
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
    listEphemeridesResponse?: shared.ListEphemeridesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
