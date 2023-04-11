import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchGetFreeTrialInfoRequestBody extends SpeakeasyBase {
    /**
     * The account IDs to get free trial status for.
     */
    accountIds: string[];
}
export declare class BatchGetFreeTrialInfoRequest extends SpeakeasyBase {
    requestBody: BatchGetFreeTrialInfoRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchGetFreeTrialInfoResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    batchGetFreeTrialInfoResponse?: shared.BatchGetFreeTrialInfoResponse;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
