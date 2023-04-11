import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchGetStreamKeyRequestBody extends SpeakeasyBase {
    /**
     * Array of ARNs, one per stream key.
     */
    arns: string[];
}
export declare class BatchGetStreamKeyRequest extends SpeakeasyBase {
    requestBody: BatchGetStreamKeyRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchGetStreamKeyResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetStreamKeyResponse?: shared.BatchGetStreamKeyResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
