import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeletePermissionPolicyXAmzTargetEnum {
    AWSWAF20150824DeletePermissionPolicy = "AWSWAF_20150824.DeletePermissionPolicy"
}
export declare class DeletePermissionPolicyRequest extends SpeakeasyBase {
    deletePermissionPolicyRequest: shared.DeletePermissionPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePermissionPolicyXAmzTargetEnum;
}
export declare class DeletePermissionPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deletePermissionPolicyResponse?: Record<string, any>;
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
    /**
     * WAFStaleDataException
     */
    wafStaleDataException?: any;
}
