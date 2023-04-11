import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListDeviceEventsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier of the device.
     */
    deviceId: string;
    /**
     * The start date for the device event query, in ISO8061 format. For example,
     *
     * @remarks
     *  2018-03-28T15:45:12.880Z
     *
     */
    fromTimeStamp: Date;
    /**
     * The maximum number of results to return per request. If not set, a default value of
     *
     * @remarks
     *  100 is used.
     */
    maxResults?: number;
    /**
     * The token to retrieve the next set of results.
     */
    nextToken?: string;
    /**
     * The end date for the device event query, in ISO8061 format. For example,
     *
     * @remarks
     *  2018-03-28T15:45:12.880Z
     *
     */
    toTimeStamp: Date;
}
export declare class ListDeviceEventsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listDeviceEventsResponse?: shared.ListDeviceEventsResponse;
    /**
     * RangeNotSatisfiableException
     */
    rangeNotSatisfiableException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
