import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutLogEventsXAmzTargetEnum {
    Logs20140328PutLogEvents = "Logs_20140328.PutLogEvents"
}
export declare class PutLogEventsRequest extends SpeakeasyBase {
    putLogEventsRequest: shared.PutLogEventsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutLogEventsXAmzTargetEnum;
}
export declare class PutLogEventsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DataAlreadyAcceptedException
     */
    dataAlreadyAcceptedException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidSequenceTokenException
     */
    invalidSequenceTokenException?: any;
    /**
     * Success
     */
    putLogEventsResponse?: shared.PutLogEventsResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnrecognizedClientException
     */
    unrecognizedClientException?: any;
}
