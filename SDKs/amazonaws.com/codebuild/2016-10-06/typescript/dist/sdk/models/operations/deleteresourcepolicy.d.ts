import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteResourcePolicyXAmzTargetEnum {
    CodeBuild20161006DeleteResourcePolicy = "CodeBuild_20161006.DeleteResourcePolicy"
}
export declare class DeleteResourcePolicyRequest extends SpeakeasyBase {
    deleteResourcePolicyInput: shared.DeleteResourcePolicyInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteResourcePolicyXAmzTargetEnum;
}
export declare class DeleteResourcePolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteResourcePolicyOutput?: Record<string, any>;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
