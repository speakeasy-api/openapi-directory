import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RetryBuildBatchXAmzTargetEnum {
    CodeBuild20161006RetryBuildBatch = "CodeBuild_20161006.RetryBuildBatch"
}
export declare class RetryBuildBatchRequest extends SpeakeasyBase {
    retryBuildBatchInput: shared.RetryBuildBatchInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RetryBuildBatchXAmzTargetEnum;
}
export declare class RetryBuildBatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    retryBuildBatchOutput?: shared.RetryBuildBatchOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
