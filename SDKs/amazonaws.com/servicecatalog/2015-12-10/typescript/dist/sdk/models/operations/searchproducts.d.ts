import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SearchProductsXAmzTargetEnum {
    Aws242ServiceCatalogServiceSearchProducts = "AWS242ServiceCatalogService.SearchProducts"
}
export declare class SearchProductsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    pageSize?: string;
    /**
     * Pagination token
     */
    pageToken?: string;
    searchProductsInput: shared.SearchProductsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SearchProductsXAmzTargetEnum;
}
export declare class SearchProductsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * Success
     */
    searchProductsOutput?: shared.SearchProductsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
