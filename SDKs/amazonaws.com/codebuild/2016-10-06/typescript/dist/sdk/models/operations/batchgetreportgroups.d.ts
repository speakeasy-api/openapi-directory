import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetReportGroupsXAmzTargetEnum {
    CodeBuild20161006BatchGetReportGroups = "CodeBuild_20161006.BatchGetReportGroups"
}
export declare class BatchGetReportGroupsRequest extends SpeakeasyBase {
    batchGetReportGroupsInput: shared.BatchGetReportGroupsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetReportGroupsXAmzTargetEnum;
}
export declare class BatchGetReportGroupsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetReportGroupsOutput?: shared.BatchGetReportGroupsOutput;
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
