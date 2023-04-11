import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartReplayXAmzTargetEnum {
    AWSEventsStartReplay = "AWSEvents.StartReplay"
}
export declare class StartReplayRequest extends SpeakeasyBase {
    startReplayRequest: shared.StartReplayRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartReplayXAmzTargetEnum;
}
export declare class StartReplayResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidEventPatternException
     */
    invalidEventPatternException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    startReplayResponse?: shared.StartReplayResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
