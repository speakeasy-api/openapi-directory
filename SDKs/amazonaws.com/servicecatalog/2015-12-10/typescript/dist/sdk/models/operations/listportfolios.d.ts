import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListPortfoliosXAmzTargetEnum {
    Aws242ServiceCatalogServiceListPortfolios = "AWS242ServiceCatalogService.ListPortfolios"
}
export declare class ListPortfoliosRequest extends SpeakeasyBase {
    listPortfoliosInput: shared.ListPortfoliosInput;
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
    xAmzTarget: ListPortfoliosXAmzTargetEnum;
}
export declare class ListPortfoliosResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * Success
     */
    listPortfoliosOutput?: shared.ListPortfoliosOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
