import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetMetricPolicyXAmzTargetEnum {
    MediaStore20170901GetMetricPolicy = "MediaStore_20170901.GetMetricPolicy"
}
export declare class GetMetricPolicyRequest extends SpeakeasyBase {
    getMetricPolicyInput: shared.GetMetricPolicyInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetMetricPolicyXAmzTargetEnum;
}
export declare class GetMetricPolicyResponse extends SpeakeasyBase {
    /**
     * ContainerInUseException
     */
    containerInUseException?: any;
    /**
     * ContainerNotFoundException
     */
    containerNotFoundException?: any;
    contentType: string;
    /**
     * Success
     */
    getMetricPolicyOutput?: shared.GetMetricPolicyOutput;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * PolicyNotFoundException
     */
    policyNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
