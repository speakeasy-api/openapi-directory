import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetProductsXAmzTargetEnum {
    AWSPriceListServiceGetProducts = "AWSPriceListService.GetProducts"
}
export declare class GetProductsRequest extends SpeakeasyBase {
    getProductsRequest: shared.GetProductsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetProductsXAmzTargetEnum;
}
export declare class GetProductsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ExpiredNextTokenException
     */
    expiredNextTokenException?: any;
    /**
     * Success
     */
    getProductsResponse?: shared.GetProductsResponse;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
