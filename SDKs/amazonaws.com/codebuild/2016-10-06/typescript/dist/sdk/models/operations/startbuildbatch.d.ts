import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartBuildBatchXAmzTargetEnum {
    CodeBuild20161006StartBuildBatch = "CodeBuild_20161006.StartBuildBatch"
}
export declare class StartBuildBatchRequest extends SpeakeasyBase {
    startBuildBatchInput: shared.StartBuildBatchInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartBuildBatchXAmzTargetEnum;
}
export declare class StartBuildBatchResponse extends SpeakeasyBase {
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
    startBuildBatchOutput?: shared.StartBuildBatchOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
