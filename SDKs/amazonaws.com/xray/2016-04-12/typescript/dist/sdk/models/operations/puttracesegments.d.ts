import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutTraceSegmentsRequestBody extends SpeakeasyBase {
    /**
     * A string containing a JSON document defining one or more segments or subsegments.
     */
    traceSegmentDocuments: string[];
}
export declare class PutTraceSegmentsRequest extends SpeakeasyBase {
    requestBody: PutTraceSegmentsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutTraceSegmentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    putTraceSegmentsResult?: shared.PutTraceSegmentsResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottledException
     */
    throttledException?: any;
}
