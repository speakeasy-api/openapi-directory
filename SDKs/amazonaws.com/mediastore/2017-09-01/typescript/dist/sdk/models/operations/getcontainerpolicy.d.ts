import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetContainerPolicyXAmzTargetEnum {
    MediaStore20170901GetContainerPolicy = "MediaStore_20170901.GetContainerPolicy"
}
export declare class GetContainerPolicyRequest extends SpeakeasyBase {
    getContainerPolicyInput: shared.GetContainerPolicyInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetContainerPolicyXAmzTargetEnum;
}
export declare class GetContainerPolicyResponse extends SpeakeasyBase {
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
    getContainerPolicyOutput?: shared.GetContainerPolicyOutput;
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
