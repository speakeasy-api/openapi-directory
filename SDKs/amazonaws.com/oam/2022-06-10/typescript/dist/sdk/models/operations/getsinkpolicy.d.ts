import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSinkPolicyRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the sink to retrieve the policy of.
     */
    sinkIdentifier: string;
}
export declare class GetSinkPolicyRequest extends SpeakeasyBase {
    requestBody: GetSinkPolicyRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSinkPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getSinkPolicyOutput?: shared.GetSinkPolicyOutput;
    /**
     * InternalServiceFault
     */
    internalServiceFault?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * MissingRequiredParameterException
     */
    missingRequiredParameterException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
