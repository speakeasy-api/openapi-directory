import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListSharedProjectsXAmzTargetEnum {
    CodeBuild20161006ListSharedProjects = "CodeBuild_20161006.ListSharedProjects"
}
export declare class ListSharedProjectsRequest extends SpeakeasyBase {
    listSharedProjectsInput: shared.ListSharedProjectsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSharedProjectsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListSharedProjectsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * Success
     */
    listSharedProjectsOutput?: shared.ListSharedProjectsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
