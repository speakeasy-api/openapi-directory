import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteContainerPolicyXAmzTargetEnum {
    MediaStore20170901DeleteContainerPolicy = "MediaStore_20170901.DeleteContainerPolicy"
}
export declare class DeleteContainerPolicyRequest extends SpeakeasyBase {
    deleteContainerPolicyInput: shared.DeleteContainerPolicyInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteContainerPolicyXAmzTargetEnum;
}
export declare class DeleteContainerPolicyResponse extends SpeakeasyBase {
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
    deleteContainerPolicyOutput?: Record<string, any>;
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
