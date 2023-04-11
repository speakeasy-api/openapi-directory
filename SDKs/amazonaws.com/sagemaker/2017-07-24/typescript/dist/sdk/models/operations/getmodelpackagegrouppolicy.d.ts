import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetModelPackageGroupPolicyXAmzTargetEnum {
    SageMakerGetModelPackageGroupPolicy = "SageMaker.GetModelPackageGroupPolicy"
}
export declare class GetModelPackageGroupPolicyRequest extends SpeakeasyBase {
    getModelPackageGroupPolicyInput: shared.GetModelPackageGroupPolicyInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetModelPackageGroupPolicyXAmzTargetEnum;
}
export declare class GetModelPackageGroupPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getModelPackageGroupPolicyOutput?: shared.GetModelPackageGroupPolicyOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
