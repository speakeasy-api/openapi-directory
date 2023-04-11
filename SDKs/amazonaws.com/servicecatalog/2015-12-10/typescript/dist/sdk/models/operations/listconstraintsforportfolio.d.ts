import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListConstraintsForPortfolioXAmzTargetEnum {
    Aws242ServiceCatalogServiceListConstraintsForPortfolio = "AWS242ServiceCatalogService.ListConstraintsForPortfolio"
}
export declare class ListConstraintsForPortfolioRequest extends SpeakeasyBase {
    listConstraintsForPortfolioInput: shared.ListConstraintsForPortfolioInput;
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
    xAmzTarget: ListConstraintsForPortfolioXAmzTargetEnum;
}
export declare class ListConstraintsForPortfolioResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * Success
     */
    listConstraintsForPortfolioOutput?: shared.ListConstraintsForPortfolioOutput;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
