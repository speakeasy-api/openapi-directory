import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetPolicyXAmzTargetEnum {
    AWSFMS20180101GetPolicy = "AWSFMS_20180101.GetPolicy"
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
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidOperationException
     */
    invalidOperationException?: any;
    /**
     * InvalidTypeException
     */
    invalidTypeException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
