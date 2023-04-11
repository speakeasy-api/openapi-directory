import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeOpsItemsXAmzTargetEnum {
    AmazonSSMDescribeOpsItems = "AmazonSSM.DescribeOpsItems"
}
export declare class DescribeOpsItemsRequest extends SpeakeasyBase {
    describeOpsItemsRequest: shared.DescribeOpsItemsRequest;
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
    xAmzTarget: DescribeOpsItemsXAmzTargetEnum;
}
export declare class DescribeOpsItemsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeOpsItemsResponse?: shared.DescribeOpsItemsResponse;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
