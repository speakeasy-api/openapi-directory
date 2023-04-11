import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListPrincipalsForPortfolioXAmzTargetEnum {
    Aws242ServiceCatalogServiceListPrincipalsForPortfolio = "AWS242ServiceCatalogService.ListPrincipalsForPortfolio"
}
export declare class ListPrincipalsForPortfolioRequest extends SpeakeasyBase {
    listPrincipalsForPortfolioInput: shared.ListPrincipalsForPortfolioInput;
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
    xAmzTarget: ListPrincipalsForPortfolioXAmzTargetEnum;
}
export declare class ListPrincipalsForPortfolioResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * Success
     */
    listPrincipalsForPortfolioOutput?: shared.ListPrincipalsForPortfolioOutput;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
