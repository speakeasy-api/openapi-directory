import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListPortfolioAccessXAmzTargetEnum {
    Aws242ServiceCatalogServiceListPortfolioAccess = "AWS242ServiceCatalogService.ListPortfolioAccess"
}
export declare class ListPortfolioAccessRequest extends SpeakeasyBase {
    listPortfolioAccessInput: shared.ListPortfolioAccessInput;
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
    xAmzTarget: ListPortfolioAccessXAmzTargetEnum;
}
export declare class ListPortfolioAccessResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * Success
     */
    listPortfolioAccessOutput?: shared.ListPortfolioAccessOutput;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
