import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchDeleteBuildsXAmzTargetEnum {
    CodeBuild20161006BatchDeleteBuilds = "CodeBuild_20161006.BatchDeleteBuilds"
}
export declare class BatchDeleteBuildsRequest extends SpeakeasyBase {
    batchDeleteBuildsInput: shared.BatchDeleteBuildsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDeleteBuildsXAmzTargetEnum;
}
export declare class BatchDeleteBuildsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchDeleteBuildsOutput?: shared.BatchDeleteBuildsOutput;
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
