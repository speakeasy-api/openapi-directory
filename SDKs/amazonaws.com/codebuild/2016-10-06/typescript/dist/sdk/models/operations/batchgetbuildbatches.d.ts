import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetBuildBatchesXAmzTargetEnum {
    CodeBuild20161006BatchGetBuildBatches = "CodeBuild_20161006.BatchGetBuildBatches"
}
export declare class BatchGetBuildBatchesRequest extends SpeakeasyBase {
    batchGetBuildBatchesInput: shared.BatchGetBuildBatchesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetBuildBatchesXAmzTargetEnum;
}
export declare class BatchGetBuildBatchesResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetBuildBatchesOutput?: shared.BatchGetBuildBatchesOutput;
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
