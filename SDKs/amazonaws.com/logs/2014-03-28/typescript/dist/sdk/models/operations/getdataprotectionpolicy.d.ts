import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDataProtectionPolicyXAmzTargetEnum {
    Logs20140328GetDataProtectionPolicy = "Logs_20140328.GetDataProtectionPolicy"
}
export declare class GetDataProtectionPolicyRequest extends SpeakeasyBase {
    getDataProtectionPolicyRequest: shared.GetDataProtectionPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDataProtectionPolicyXAmzTargetEnum;
}
export declare class GetDataProtectionPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getDataProtectionPolicyResponse?: shared.GetDataProtectionPolicyResponse;
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
}
