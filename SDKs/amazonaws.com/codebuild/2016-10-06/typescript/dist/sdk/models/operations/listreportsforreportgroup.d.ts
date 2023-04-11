import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListReportsForReportGroupXAmzTargetEnum {
    CodeBuild20161006ListReportsForReportGroup = "CodeBuild_20161006.ListReportsForReportGroup"
}
export declare class ListReportsForReportGroupRequest extends SpeakeasyBase {
    listReportsForReportGroupInput: shared.ListReportsForReportGroupInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListReportsForReportGroupXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListReportsForReportGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * Success
     */
    listReportsForReportGroupOutput?: shared.ListReportsForReportGroupOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
