import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListPortfoliosForProductXAmzTargetEnum {
    Aws242ServiceCatalogServiceListPortfoliosForProduct = "AWS242ServiceCatalogService.ListPortfoliosForProduct"
}
export declare class ListPortfoliosForProductRequest extends SpeakeasyBase {
    listPortfoliosForProductInput: shared.ListPortfoliosForProductInput;
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
    xAmzTarget: ListPortfoliosForProductXAmzTargetEnum;
}
export declare class ListPortfoliosForProductResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * Success
     */
    listPortfoliosForProductOutput?: shared.ListPortfoliosForProductOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
