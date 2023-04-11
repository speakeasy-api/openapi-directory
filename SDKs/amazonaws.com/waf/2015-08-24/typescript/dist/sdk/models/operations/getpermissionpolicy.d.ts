import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetPermissionPolicyXAmzTargetEnum {
    AWSWAF20150824GetPermissionPolicy = "AWSWAF_20150824.GetPermissionPolicy"
}
export declare class GetPermissionPolicyRequest extends SpeakeasyBase {
    getPermissionPolicyRequest: shared.GetPermissionPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPermissionPolicyXAmzTargetEnum;
}
export declare class GetPermissionPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getPermissionPolicyResponse?: shared.GetPermissionPolicyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * WAFInternalErrorException
     */
    wafInternalErrorException?: any;
    /**
     * WAFNonexistentItemException
     */
    wafNonexistentItemException?: any;
}
