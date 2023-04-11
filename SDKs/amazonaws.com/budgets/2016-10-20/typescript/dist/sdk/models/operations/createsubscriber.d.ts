import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateSubscriberXAmzTargetEnum {
    AWSBudgetServiceGatewayCreateSubscriber = "AWSBudgetServiceGateway.CreateSubscriber"
}
export declare class CreateSubscriberRequest extends SpeakeasyBase {
    createSubscriberRequest: shared.CreateSubscriberRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateSubscriberXAmzTargetEnum;
}
export declare class CreateSubscriberResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createSubscriberResponse?: Record<string, any>;
    /**
     * CreationLimitExceededException
     */
    creationLimitExceededException?: any;
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
}
