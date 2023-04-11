import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteDataProtectionPolicyXAmzTargetEnum {
    Logs20140328DeleteDataProtectionPolicy = "Logs_20140328.DeleteDataProtectionPolicy"
}
export declare class DeleteDataProtectionPolicyRequest extends SpeakeasyBase {
    deleteDataProtectionPolicyRequest: shared.DeleteDataProtectionPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDataProtectionPolicyXAmzTargetEnum;
}
export declare class DeleteDataProtectionPolicyResponse extends SpeakeasyBase {
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
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
