import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SearchProvisionedProductsXAmzTargetEnum {
    Aws242ServiceCatalogServiceSearchProvisionedProducts = "AWS242ServiceCatalogService.SearchProvisionedProducts"
}
export declare class SearchProvisionedProductsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    pageSize?: string;
    /**
     * Pagination token
     */
    pageToken?: string;
    searchProvisionedProductsInput: shared.SearchProvisionedProductsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SearchProvisionedProductsXAmzTargetEnum;
}
export declare class SearchProvisionedProductsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * Success
     */
    searchProvisionedProductsOutput?: shared.SearchProvisionedProductsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
