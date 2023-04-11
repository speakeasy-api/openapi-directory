import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutModelPackageGroupPolicyXAmzTargetEnum {
    SageMakerPutModelPackageGroupPolicy = "SageMaker.PutModelPackageGroupPolicy"
}
export declare class PutModelPackageGroupPolicyRequest extends SpeakeasyBase {
    putModelPackageGroupPolicyInput: shared.PutModelPackageGroupPolicyInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutModelPackageGroupPolicyXAmzTargetEnum;
}
export declare class PutModelPackageGroupPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    putModelPackageGroupPolicyOutput?: shared.PutModelPackageGroupPolicyOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
