import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetLifecyclePolicyXAmzTargetEnum {
    MediaStore20170901GetLifecyclePolicy = "MediaStore_20170901.GetLifecyclePolicy"
}
export declare class GetLifecyclePolicyRequest extends SpeakeasyBase {
    getLifecyclePolicyInput: shared.GetLifecyclePolicyInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLifecyclePolicyXAmzTargetEnum;
}
export declare class GetLifecyclePolicyResponse extends SpeakeasyBase {
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
    getLifecyclePolicyOutput?: shared.GetLifecyclePolicyOutput;
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
