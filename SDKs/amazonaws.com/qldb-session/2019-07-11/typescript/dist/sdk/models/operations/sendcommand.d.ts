import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SendCommandXAmzTargetEnum {
    QLDBSessionSendCommand = "QLDBSession.SendCommand"
}
export declare class SendCommandRequest extends SpeakeasyBase {
    sendCommandRequest: shared.SendCommandRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SendCommandXAmzTargetEnum;
}
export declare class SendCommandResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    /**
     * CapacityExceededException
     */
    capacityExceededException?: any;
    contentType: string;
    /**
     * InvalidSessionException
     */
    invalidSessionException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * OccConflictException
     */
    occConflictException?: any;
    /**
     * RateExceededException
     */
    rateExceededException?: any;
    /**
     * Success
     */
    sendCommandResult?: shared.SendCommandResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
