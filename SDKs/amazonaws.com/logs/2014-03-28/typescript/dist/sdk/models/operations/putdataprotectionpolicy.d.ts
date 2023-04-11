import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutDataProtectionPolicyXAmzTargetEnum {
    Logs20140328PutDataProtectionPolicy = "Logs_20140328.PutDataProtectionPolicy"
}
export declare class PutDataProtectionPolicyRequest extends SpeakeasyBase {
    putDataProtectionPolicyRequest: shared.PutDataProtectionPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutDataProtectionPolicyXAmzTargetEnum;
}
export declare class PutDataProtectionPolicyResponse extends SpeakeasyBase {
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
     * Success
     */
    putDataProtectionPolicyResponse?: shared.PutDataProtectionPolicyResponse;
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
