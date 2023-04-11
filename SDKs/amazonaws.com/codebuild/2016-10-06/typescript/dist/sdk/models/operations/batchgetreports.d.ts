import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetReportsXAmzTargetEnum {
    CodeBuild20161006BatchGetReports = "CodeBuild_20161006.BatchGetReports"
}
export declare class BatchGetReportsRequest extends SpeakeasyBase {
    batchGetReportsInput: shared.BatchGetReportsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetReportsXAmzTargetEnum;
}
export declare class BatchGetReportsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetReportsOutput?: shared.BatchGetReportsOutput;
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
