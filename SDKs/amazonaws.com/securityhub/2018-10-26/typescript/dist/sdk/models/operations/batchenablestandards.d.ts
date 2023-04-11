import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchEnableStandardsRequestBody extends SpeakeasyBase {
    /**
     * The list of standards checks to enable.
     */
    standardsSubscriptionRequests: shared.StandardsSubscriptionRequest[];
}
export declare class BatchEnableStandardsRequest extends SpeakeasyBase {
    requestBody: BatchEnableStandardsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchEnableStandardsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchEnableStandardsResponse?: shared.BatchEnableStandardsResponse;
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
