import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetResourcePolicyXAmzTargetEnum {
    CodeBuild20161006GetResourcePolicy = "CodeBuild_20161006.GetResourcePolicy"
}
export declare class GetResourcePolicyRequest extends SpeakeasyBase {
    getResourcePolicyInput: shared.GetResourcePolicyInput;
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
    getResourcePolicyOutput?: shared.GetResourcePolicyOutput;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
