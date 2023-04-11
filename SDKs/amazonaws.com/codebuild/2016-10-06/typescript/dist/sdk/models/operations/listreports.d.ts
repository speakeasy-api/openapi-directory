import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListReportsXAmzTargetEnum {
    CodeBuild20161006ListReports = "CodeBuild_20161006.ListReports"
}
export declare class ListReportsRequest extends SpeakeasyBase {
    listReportsInput: shared.ListReportsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListReportsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListReportsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * Success
     */
    listReportsOutput?: shared.ListReportsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
