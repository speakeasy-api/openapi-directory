import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListBuildBatchesForProjectXAmzTargetEnum {
    CodeBuild20161006ListBuildBatchesForProject = "CodeBuild_20161006.ListBuildBatchesForProject"
}
export declare class ListBuildBatchesForProjectRequest extends SpeakeasyBase {
    listBuildBatchesForProjectInput: shared.ListBuildBatchesForProjectInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListBuildBatchesForProjectXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListBuildBatchesForProjectResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * Success
     */
    listBuildBatchesForProjectOutput?: shared.ListBuildBatchesForProjectOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
