import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutPermissionPolicyXAmzTargetEnum {
    AWSWAFRegional20161128PutPermissionPolicy = "AWSWAF_Regional_20161128.PutPermissionPolicy"
}
export declare class PutPermissionPolicyRequest extends SpeakeasyBase {
    putPermissionPolicyRequest: shared.PutPermissionPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutPermissionPolicyXAmzTargetEnum;
}
export declare class PutPermissionPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    putPermissionPolicyResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * WAFInternalErrorException
     */
    wafInternalErrorException?: any;
    /**
     * WAFInvalidPermissionPolicyException
     */
    wafInvalidPermissionPolicyException?: any;
    /**
     * WAFNonexistentItemException
     */
    wafNonexistentItemException?: any;
    /**
     * WAFStaleDataException
     */
    wafStaleDataException?: any;
}
