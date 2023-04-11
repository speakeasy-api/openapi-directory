import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribePortfolioShareStatusXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribePortfolioShareStatus = "AWS242ServiceCatalogService.DescribePortfolioShareStatus"
}
export declare class DescribePortfolioShareStatusRequest extends SpeakeasyBase {
    describePortfolioShareStatusInput: shared.DescribePortfolioShareStatusInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePortfolioShareStatusXAmzTargetEnum;
}
export declare class DescribePortfolioShareStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describePortfolioShareStatusOutput?: shared.DescribePortfolioShareStatusOutput;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * OperationNotSupportedException
     */
    operationNotSupportedException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
