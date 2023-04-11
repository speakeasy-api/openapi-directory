import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetPolicyXAmzTargetEnum {
    ACMPrivateCAGetPolicy = "ACMPrivateCA.GetPolicy"
}
export declare class GetPolicyRequest extends SpeakeasyBase {
    getPolicyRequest: shared.GetPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPolicyXAmzTargetEnum;
}
export declare class GetPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getPolicyResponse?: shared.GetPolicyResponse;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * RequestFailedException
     */
    requestFailedException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
