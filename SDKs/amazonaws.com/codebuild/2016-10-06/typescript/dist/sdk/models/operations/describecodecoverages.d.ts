import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeCodeCoveragesXAmzTargetEnum {
    CodeBuild20161006DescribeCodeCoverages = "CodeBuild_20161006.DescribeCodeCoverages"
}
export declare class DescribeCodeCoveragesRequest extends SpeakeasyBase {
    describeCodeCoveragesInput: shared.DescribeCodeCoveragesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCodeCoveragesXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class DescribeCodeCoveragesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeCodeCoveragesOutput?: shared.DescribeCodeCoveragesOutput;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
