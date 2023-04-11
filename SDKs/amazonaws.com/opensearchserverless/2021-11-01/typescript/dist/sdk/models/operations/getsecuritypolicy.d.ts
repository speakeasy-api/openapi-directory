import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetSecurityPolicyXAmzTargetEnum {
    OpenSearchServerlessGetSecurityPolicy = "OpenSearchServerless.GetSecurityPolicy"
}
export declare class GetSecurityPolicyRequest extends SpeakeasyBase {
    getSecurityPolicyRequest: shared.GetSecurityPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSecurityPolicyXAmzTargetEnum;
}
export declare class GetSecurityPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getSecurityPolicyResponse?: shared.GetSecurityPolicyResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
