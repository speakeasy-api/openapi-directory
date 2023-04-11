import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SubscribeToEventXAmzTargetEnum {
    InspectorServiceSubscribeToEvent = "InspectorService.SubscribeToEvent"
}
export declare class SubscribeToEventRequest extends SpeakeasyBase {
    subscribeToEventRequest: shared.SubscribeToEventRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SubscribeToEventXAmzTargetEnum;
}
export declare class SubscribeToEventResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NoSuchEntityException
     */
    noSuchEntityException?: any;
    /**
     * ServiceTemporarilyUnavailableException
     */
    serviceTemporarilyUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
