import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutLifecyclePolicyXAmzTargetEnum {
    MediaStore20170901PutLifecyclePolicy = "MediaStore_20170901.PutLifecyclePolicy"
}
export declare class PutLifecyclePolicyRequest extends SpeakeasyBase {
    putLifecyclePolicyInput: shared.PutLifecyclePolicyInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutLifecyclePolicyXAmzTargetEnum;
}
export declare class PutLifecyclePolicyResponse extends SpeakeasyBase {
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
    putLifecyclePolicyOutput?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
