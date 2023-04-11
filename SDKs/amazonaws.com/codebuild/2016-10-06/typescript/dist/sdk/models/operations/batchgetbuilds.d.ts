import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetBuildsXAmzTargetEnum {
    CodeBuild20161006BatchGetBuilds = "CodeBuild_20161006.BatchGetBuilds"
}
export declare class BatchGetBuildsRequest extends SpeakeasyBase {
    batchGetBuildsInput: shared.BatchGetBuildsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetBuildsXAmzTargetEnum;
}
export declare class BatchGetBuildsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetBuildsOutput?: shared.BatchGetBuildsOutput;
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
