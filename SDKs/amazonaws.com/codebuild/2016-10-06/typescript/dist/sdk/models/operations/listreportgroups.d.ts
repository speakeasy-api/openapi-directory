import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListReportGroupsXAmzTargetEnum {
    CodeBuild20161006ListReportGroups = "CodeBuild_20161006.ListReportGroups"
}
export declare class ListReportGroupsRequest extends SpeakeasyBase {
    listReportGroupsInput: shared.ListReportGroupsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListReportGroupsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListReportGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * Success
     */
    listReportGroupsOutput?: shared.ListReportGroupsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
