import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteSubscriberXAmzTargetEnum {
    AWSBudgetServiceGatewayDeleteSubscriber = "AWSBudgetServiceGateway.DeleteSubscriber"
}
export declare class DeleteSubscriberRequest extends SpeakeasyBase {
    deleteSubscriberRequest: shared.DeleteSubscriberRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSubscriberXAmzTargetEnum;
}
export declare class DeleteSubscriberResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteSubscriberResponse?: Record<string, any>;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
