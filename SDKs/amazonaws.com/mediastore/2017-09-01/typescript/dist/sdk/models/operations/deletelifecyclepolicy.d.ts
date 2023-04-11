import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteLifecyclePolicyXAmzTargetEnum {
    MediaStore20170901DeleteLifecyclePolicy = "MediaStore_20170901.DeleteLifecyclePolicy"
}
export declare class DeleteLifecyclePolicyRequest extends SpeakeasyBase {
    deleteLifecyclePolicyInput: shared.DeleteLifecyclePolicyInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteLifecyclePolicyXAmzTargetEnum;
}
export declare class DeleteLifecyclePolicyResponse extends SpeakeasyBase {
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
    deleteLifecyclePolicyOutput?: Record<string, any>;
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
