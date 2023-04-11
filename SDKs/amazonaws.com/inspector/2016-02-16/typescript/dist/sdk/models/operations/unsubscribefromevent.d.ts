import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UnsubscribeFromEventXAmzTargetEnum {
    InspectorServiceUnsubscribeFromEvent = "InspectorService.UnsubscribeFromEvent"
}
export declare class UnsubscribeFromEventRequest extends SpeakeasyBase {
    unsubscribeFromEventRequest: shared.UnsubscribeFromEventRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UnsubscribeFromEventXAmzTargetEnum;
}
export declare class UnsubscribeFromEventResponse extends SpeakeasyBase {
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
