import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SearchProductsAsAdminXAmzTargetEnum {
    Aws242ServiceCatalogServiceSearchProductsAsAdmin = "AWS242ServiceCatalogService.SearchProductsAsAdmin"
}
export declare class SearchProductsAsAdminRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    pageSize?: string;
    /**
     * Pagination token
     */
    pageToken?: string;
    searchProductsAsAdminInput: shared.SearchProductsAsAdminInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SearchProductsAsAdminXAmzTargetEnum;
}
export declare class SearchProductsAsAdminResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    searchProductsAsAdminOutput?: shared.SearchProductsAsAdminOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
