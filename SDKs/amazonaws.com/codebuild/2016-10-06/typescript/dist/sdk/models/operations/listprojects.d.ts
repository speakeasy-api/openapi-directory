import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListProjectsXAmzTargetEnum {
    CodeBuild20161006ListProjects = "CodeBuild_20161006.ListProjects"
}
export declare class ListProjectsRequest extends SpeakeasyBase {
    listProjectsInput: shared.ListProjectsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListProjectsXAmzTargetEnum;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListProjectsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * Success
     */
    listProjectsOutput?: shared.ListProjectsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
