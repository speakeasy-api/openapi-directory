import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Data retrieval policy.
 */
export declare class SetDataRetrievalPolicyRequestBodyPolicy extends SpeakeasyBase {
    rules?: shared.DataRetrievalRule[];
}
export declare class SetDataRetrievalPolicyRequestBody extends SpeakeasyBase {
    /**
     * Data retrieval policy.
     */
    policy?: SetDataRetrievalPolicyRequestBodyPolicy;
}
export declare class SetDataRetrievalPolicyRequest extends SpeakeasyBase {
    requestBody: SetDataRetrievalPolicyRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The <code>AccountId</code> value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.
     */
    accountId: string;
}
export declare class SetDataRetrievalPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * MissingParameterValueException
     */
    missingParameterValueException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
}
