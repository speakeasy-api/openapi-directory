import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribePortfolioXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribePortfolio = "AWS242ServiceCatalogService.DescribePortfolio"
}
export declare class DescribePortfolioRequest extends SpeakeasyBase {
    describePortfolioInput: shared.DescribePortfolioInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePortfolioXAmzTargetEnum;
}
export declare class DescribePortfolioResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describePortfolioOutput?: shared.DescribePortfolioOutput;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
