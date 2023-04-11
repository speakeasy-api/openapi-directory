import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CancelReplayXAmzTargetEnum {
    AWSEventsCancelReplay = "AWSEvents.CancelReplay"
}
export declare class CancelReplayRequest extends SpeakeasyBase {
    cancelReplayRequest: shared.CancelReplayRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelReplayXAmzTargetEnum;
}
export declare class CancelReplayResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cancelReplayResponse?: shared.CancelReplayResponse;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * IllegalStatusException
     */
    illegalStatusException?: any;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
