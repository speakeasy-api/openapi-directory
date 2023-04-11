import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutPolicyXAmzTargetEnum {
    AWSFMS20180101PutPolicy = "AWSFMS_20180101.PutPolicy"
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
    contentType: string;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * InvalidOperationException
     */
    invalidOperationException?: any;
    /**
     * InvalidTypeException
     */
    invalidTypeException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * Success
     */
    putPolicyResponse?: shared.PutPolicyResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
