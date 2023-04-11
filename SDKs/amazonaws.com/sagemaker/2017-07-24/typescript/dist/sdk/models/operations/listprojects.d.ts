import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListProjectsXAmzTargetEnum {
    SageMakerListProjects = "SageMaker.ListProjects"
}
export declare class ListProjectsRequest extends SpeakeasyBase {
    listProjectsInput: shared.ListProjectsInput;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListProjectsXAmzTargetEnum;
}
export declare class ListProjectsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listProjectsOutput?: shared.ListProjectsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
