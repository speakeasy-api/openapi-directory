import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchDeleteWorldsRequestBody extends SpeakeasyBase {
    /**
     * A list of Amazon Resource Names (arns) that correspond to worlds to delete.
     */
    worlds: string[];
}
export declare class BatchDeleteWorldsRequest extends SpeakeasyBase {
    requestBody: BatchDeleteWorldsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchDeleteWorldsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchDeleteWorldsResponse?: shared.BatchDeleteWorldsResponse;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
