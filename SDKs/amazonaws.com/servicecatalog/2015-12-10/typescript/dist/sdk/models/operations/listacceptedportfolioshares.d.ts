import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAcceptedPortfolioSharesXAmzTargetEnum {
    Aws242ServiceCatalogServiceListAcceptedPortfolioShares = "AWS242ServiceCatalogService.ListAcceptedPortfolioShares"
}
export declare class ListAcceptedPortfolioSharesRequest extends SpeakeasyBase {
    listAcceptedPortfolioSharesInput: shared.ListAcceptedPortfolioSharesInput;
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
    xAmzTarget: ListAcceptedPortfolioSharesXAmzTargetEnum;
}
export declare class ListAcceptedPortfolioSharesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * Success
     */
    listAcceptedPortfolioSharesOutput?: shared.ListAcceptedPortfolioSharesOutput;
    /**
     * OperationNotSupportedException
     */
    operationNotSupportedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
