import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetProjectsXAmzTargetEnum {
    CodeBuild20161006BatchGetProjects = "CodeBuild_20161006.BatchGetProjects"
}
export declare class BatchGetProjectsRequest extends SpeakeasyBase {
    batchGetProjectsInput: shared.BatchGetProjectsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetProjectsXAmzTargetEnum;
}
export declare class BatchGetProjectsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetProjectsOutput?: shared.BatchGetProjectsOutput;
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
