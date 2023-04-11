import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListSharedReportGroupsXAmzTargetEnum {
    CodeBuild20161006ListSharedReportGroups = "CodeBuild_20161006.ListSharedReportGroups"
}
export declare class ListSharedReportGroupsRequest extends SpeakeasyBase {
    listSharedReportGroupsInput: shared.ListSharedReportGroupsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSharedReportGroupsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListSharedReportGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * Success
     */
    listSharedReportGroupsOutput?: shared.ListSharedReportGroupsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
