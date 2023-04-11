import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetResourcePolicyXAmzTargetEnum {
    RedshiftServerlessGetResourcePolicy = "RedshiftServerless.GetResourcePolicy"
}
export declare class GetResourcePolicyRequest extends SpeakeasyBase {
    getResourcePolicyRequest: shared.GetResourcePolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResourcePolicyXAmzTargetEnum;
}
export declare class GetResourcePolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getResourcePolicyResponse?: shared.GetResourcePolicyResponse;
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
