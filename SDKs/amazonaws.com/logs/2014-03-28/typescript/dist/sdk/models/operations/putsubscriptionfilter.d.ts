import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutSubscriptionFilterXAmzTargetEnum {
    Logs20140328PutSubscriptionFilter = "Logs_20140328.PutSubscriptionFilter"
}
export declare class PutSubscriptionFilterRequest extends SpeakeasyBase {
    putSubscriptionFilterRequest: shared.PutSubscriptionFilterRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutSubscriptionFilterXAmzTargetEnum;
}
export declare class PutSubscriptionFilterResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * OperationAbortedException
     */
    operationAbortedException?: any;
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
}
