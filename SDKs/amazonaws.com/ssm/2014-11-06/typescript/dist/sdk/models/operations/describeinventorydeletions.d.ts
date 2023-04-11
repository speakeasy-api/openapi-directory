import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeInventoryDeletionsXAmzTargetEnum {
    AmazonSSMDescribeInventoryDeletions = "AmazonSSM.DescribeInventoryDeletions"
}
export declare class DescribeInventoryDeletionsRequest extends SpeakeasyBase {
    describeInventoryDeletionsRequest: shared.DescribeInventoryDeletionsRequest;
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
    xAmzTarget: DescribeInventoryDeletionsXAmzTargetEnum;
}
export declare class DescribeInventoryDeletionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeInventoryDeletionsResult?: shared.DescribeInventoryDeletionsResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidDeletionIdException
     */
    invalidDeletionIdException?: any;
    /**
     * InvalidNextToken
     */
    invalidNextToken?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
