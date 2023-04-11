import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchDisableStandardsRequestBody extends SpeakeasyBase {
    /**
     * The ARNs of the standards subscriptions to disable.
     */
    standardsSubscriptionArns: string[];
}
export declare class BatchDisableStandardsRequest extends SpeakeasyBase {
    requestBody: BatchDisableStandardsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchDisableStandardsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchDisableStandardsResponse?: shared.BatchDisableStandardsResponse;
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidAccessException
     */
    invalidAccessException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
