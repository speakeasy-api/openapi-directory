import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetPriceListFileUrlXAmzTargetEnum {
    AWSPriceListServiceGetPriceListFileUrl = "AWSPriceListService.GetPriceListFileUrl"
}
export declare class GetPriceListFileUrlRequest extends SpeakeasyBase {
    getPriceListFileUrlRequest: shared.GetPriceListFileUrlRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPriceListFileUrlXAmzTargetEnum;
}
export declare class GetPriceListFileUrlResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getPriceListFileUrlResponse?: shared.GetPriceListFileUrlResponse;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
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
