import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetAttributeValuesXAmzTargetEnum {
    AWSPriceListServiceGetAttributeValues = "AWSPriceListService.GetAttributeValues"
}
export declare class GetAttributeValuesRequest extends SpeakeasyBase {
    getAttributeValuesRequest: shared.GetAttributeValuesRequest;
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
    xAmzTarget: GetAttributeValuesXAmzTargetEnum;
}
export declare class GetAttributeValuesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ExpiredNextTokenException
     */
    expiredNextTokenException?: any;
    /**
     * Success
     */
    getAttributeValuesResponse?: shared.GetAttributeValuesResponse;
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
