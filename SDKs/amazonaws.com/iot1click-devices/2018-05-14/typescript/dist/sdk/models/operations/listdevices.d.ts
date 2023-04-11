import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListDevicesRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The type of the device, such as "button".
     */
    deviceType?: string;
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
}
export declare class ListDevicesResponse extends SpeakeasyBase {
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
    listDevicesResponse?: shared.ListDevicesResponse;
    /**
     * RangeNotSatisfiableException
     */
    rangeNotSatisfiableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
