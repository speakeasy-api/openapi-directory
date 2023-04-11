import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateSubscriberXAmzTargetEnum {
    AWSBudgetServiceGatewayUpdateSubscriber = "AWSBudgetServiceGateway.UpdateSubscriber"
}
export declare class UpdateSubscriberRequest extends SpeakeasyBase {
    updateSubscriberRequest: shared.UpdateSubscriberRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateSubscriberXAmzTargetEnum;
}
export declare class UpdateSubscriberResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * DuplicateRecordException
     */
    duplicateRecordException?: any;
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
    /**
     * Success
     */
    updateSubscriberResponse?: Record<string, any>;
}
