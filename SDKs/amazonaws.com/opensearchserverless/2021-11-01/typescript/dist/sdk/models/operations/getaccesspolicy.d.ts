import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetAccessPolicyXAmzTargetEnum {
    OpenSearchServerlessGetAccessPolicy = "OpenSearchServerless.GetAccessPolicy"
}
export declare class GetAccessPolicyRequest extends SpeakeasyBase {
    getAccessPolicyRequest: shared.GetAccessPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAccessPolicyXAmzTargetEnum;
}
export declare class GetAccessPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getAccessPolicyResponse?: shared.GetAccessPolicyResponse;
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
