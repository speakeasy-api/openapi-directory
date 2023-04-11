import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeDataSourcesXAmzTargetEnum {
    AmazonML20141212DescribeDataSources = "AmazonML_20141212.DescribeDataSources"
}
export declare class DescribeDataSourcesRequest extends SpeakeasyBase {
    describeDataSourcesInput: shared.DescribeDataSourcesInput;
    /**
     * Pagination limit
     */
    limit?: string;
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
    xAmzTarget: DescribeDataSourcesXAmzTargetEnum;
}
export declare class DescribeDataSourcesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeDataSourcesOutput?: shared.DescribeDataSourcesOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
