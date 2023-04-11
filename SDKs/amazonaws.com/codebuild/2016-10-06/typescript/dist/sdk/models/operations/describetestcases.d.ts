import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeTestCasesXAmzTargetEnum {
    CodeBuild20161006DescribeTestCases = "CodeBuild_20161006.DescribeTestCases"
}
export declare class DescribeTestCasesRequest extends SpeakeasyBase {
    describeTestCasesInput: shared.DescribeTestCasesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTestCasesXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class DescribeTestCasesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeTestCasesOutput?: shared.DescribeTestCasesOutput;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
