import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateApiDestinationXAmzTargetEnum {
    AWSEventsUpdateApiDestination = "AWSEvents.UpdateApiDestination"
}
export declare class UpdateApiDestinationRequest extends SpeakeasyBase {
    updateApiDestinationRequest: shared.UpdateApiDestinationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateApiDestinationXAmzTargetEnum;
}
export declare class UpdateApiDestinationResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateApiDestinationResponse?: shared.UpdateApiDestinationResponse;
}
