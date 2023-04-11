import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchGetChannelRequestBody extends SpeakeasyBase {
    /**
     * Array of ARNs, one per channel.
     */
    arns: string[];
}
export declare class BatchGetChannelRequest extends SpeakeasyBase {
    requestBody: BatchGetChannelRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchGetChannelResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetChannelResponse?: shared.BatchGetChannelResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
