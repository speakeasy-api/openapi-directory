import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SampleChannelDataRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the channel whose message samples are retrieved.
     */
    channelName: string;
    /**
     * The end of the time window from which sample messages are retrieved.
     */
    endTime?: Date;
    /**
     * The number of sample messages to be retrieved. The limit is 10. The default is also 10.
     */
    maxMessages?: number;
    /**
     * The start of the time window from which sample messages are retrieved.
     */
    startTime?: Date;
}
export declare class SampleChannelDataResponse extends SpeakeasyBase {
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    sampleChannelDataResponse?: shared.SampleChannelDataResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
