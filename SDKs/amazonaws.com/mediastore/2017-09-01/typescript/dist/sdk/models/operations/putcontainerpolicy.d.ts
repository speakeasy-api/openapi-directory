import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutContainerPolicyXAmzTargetEnum {
    MediaStore20170901PutContainerPolicy = "MediaStore_20170901.PutContainerPolicy"
}
export declare class PutContainerPolicyRequest extends SpeakeasyBase {
    putContainerPolicyInput: shared.PutContainerPolicyInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutContainerPolicyXAmzTargetEnum;
}
export declare class PutContainerPolicyResponse extends SpeakeasyBase {
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
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * Success
     */
    putContainerPolicyOutput?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
