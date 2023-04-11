import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteSubscriptionFilterXAmzTargetEnum {
    Logs20140328DeleteSubscriptionFilter = "Logs_20140328.DeleteSubscriptionFilter"
}
export declare class DeleteSubscriptionFilterRequest extends SpeakeasyBase {
    deleteSubscriptionFilterRequest: shared.DeleteSubscriptionFilterRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSubscriptionFilterXAmzTargetEnum;
}
export declare class DeleteSubscriptionFilterResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * OperationAbortedException
     */
    operationAbortedException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
}
