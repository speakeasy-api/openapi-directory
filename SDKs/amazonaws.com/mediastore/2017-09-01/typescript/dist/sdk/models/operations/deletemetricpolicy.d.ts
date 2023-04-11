import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteMetricPolicyXAmzTargetEnum {
    MediaStore20170901DeleteMetricPolicy = "MediaStore_20170901.DeleteMetricPolicy"
}
export declare class DeleteMetricPolicyRequest extends SpeakeasyBase {
    deleteMetricPolicyInput: shared.DeleteMetricPolicyInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteMetricPolicyXAmzTargetEnum;
}
export declare class DeleteMetricPolicyResponse extends SpeakeasyBase {
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
    deleteMetricPolicyOutput?: Record<string, any>;
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
