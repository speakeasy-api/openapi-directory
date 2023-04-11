import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutPolicyXAmzTargetEnum {
    ACMPrivateCAPutPolicy = "ACMPrivateCA.PutPolicy"
}
export declare class PutPolicyRequest extends SpeakeasyBase {
    putPolicyRequest: shared.PutPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutPolicyXAmzTargetEnum;
}
export declare class PutPolicyResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * InvalidPolicyException
     */
    invalidPolicyException?: any;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    /**
     * LockoutPreventedException
     */
    lockoutPreventedException?: any;
    /**
     * RequestFailedException
     */
    requestFailedException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
