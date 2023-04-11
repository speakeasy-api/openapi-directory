import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteRetentionPolicyXAmzTargetEnum {
    Logs20140328DeleteRetentionPolicy = "Logs_20140328.DeleteRetentionPolicy"
}
export declare class DeleteRetentionPolicyRequest extends SpeakeasyBase {
    deleteRetentionPolicyRequest: shared.DeleteRetentionPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRetentionPolicyXAmzTargetEnum;
}
export declare class DeleteRetentionPolicyResponse extends SpeakeasyBase {
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
