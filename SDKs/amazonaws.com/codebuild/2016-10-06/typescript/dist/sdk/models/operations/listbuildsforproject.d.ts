import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListBuildsForProjectXAmzTargetEnum {
    CodeBuild20161006ListBuildsForProject = "CodeBuild_20161006.ListBuildsForProject"
}
export declare class ListBuildsForProjectRequest extends SpeakeasyBase {
    listBuildsForProjectInput: shared.ListBuildsForProjectInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListBuildsForProjectXAmzTargetEnum;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListBuildsForProjectResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * Success
     */
    listBuildsForProjectOutput?: shared.ListBuildsForProjectOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
