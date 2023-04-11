import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribePortfolioSharesXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribePortfolioShares = "AWS242ServiceCatalogService.DescribePortfolioShares"
}
export declare class DescribePortfolioSharesRequest extends SpeakeasyBase {
    describePortfolioSharesInput: shared.DescribePortfolioSharesInput;
    /**
     * Pagination limit
     */
    pageSize?: string;
    /**
     * Pagination token
     */
    pageToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePortfolioSharesXAmzTargetEnum;
}
export declare class DescribePortfolioSharesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describePortfolioSharesOutput?: shared.DescribePortfolioSharesOutput;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
