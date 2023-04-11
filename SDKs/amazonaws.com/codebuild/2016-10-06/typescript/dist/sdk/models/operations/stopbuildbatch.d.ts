import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopBuildBatchXAmzTargetEnum {
    CodeBuild20161006StopBuildBatch = "CodeBuild_20161006.StopBuildBatch"
}
export declare class StopBuildBatchRequest extends SpeakeasyBase {
    stopBuildBatchInput: shared.StopBuildBatchInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopBuildBatchXAmzTargetEnum;
}
export declare class StopBuildBatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    stopBuildBatchOutput?: shared.StopBuildBatchOutput;
}
