import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteModelPackageGroupPolicyXAmzTargetEnum {
    SageMakerDeleteModelPackageGroupPolicy = "SageMaker.DeleteModelPackageGroupPolicy"
}
export declare class DeleteModelPackageGroupPolicyRequest extends SpeakeasyBase {
    deleteModelPackageGroupPolicyInput: shared.DeleteModelPackageGroupPolicyInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteModelPackageGroupPolicyXAmzTargetEnum;
}
export declare class DeleteModelPackageGroupPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
