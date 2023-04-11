import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutDestinationPolicyXAmzTargetEnum {
    Logs20140328PutDestinationPolicy = "Logs_20140328.PutDestinationPolicy"
}
export declare class PutDestinationPolicyRequest extends SpeakeasyBase {
    putDestinationPolicyRequest: shared.PutDestinationPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutDestinationPolicyXAmzTargetEnum;
}
export declare class PutDestinationPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * OperationAbortedException
     */
    operationAbortedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
}
