import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetLineageGroupPolicyXAmzTargetEnum {
    SageMakerGetLineageGroupPolicy = "SageMaker.GetLineageGroupPolicy"
}
export declare class GetLineageGroupPolicyRequest extends SpeakeasyBase {
    getLineageGroupPolicyRequest: shared.GetLineageGroupPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLineageGroupPolicyXAmzTargetEnum;
}
export declare class GetLineageGroupPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getLineageGroupPolicyResponse?: shared.GetLineageGroupPolicyResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
