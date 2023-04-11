import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetNamedQueryXAmzTargetEnum {
    AmazonAthenaBatchGetNamedQuery = "AmazonAthena.BatchGetNamedQuery"
}
export declare class BatchGetNamedQueryRequest extends SpeakeasyBase {
    batchGetNamedQueryInput: shared.BatchGetNamedQueryInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetNamedQueryXAmzTargetEnum;
}
export declare class BatchGetNamedQueryResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetNamedQueryOutput?: shared.BatchGetNamedQueryOutput;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
