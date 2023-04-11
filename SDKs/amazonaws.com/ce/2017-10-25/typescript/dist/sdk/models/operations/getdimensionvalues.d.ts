import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDimensionValuesXAmzTargetEnum {
    AWSInsightsIndexServiceGetDimensionValues = "AWSInsightsIndexService.GetDimensionValues"
}
export declare class GetDimensionValuesRequest extends SpeakeasyBase {
    getDimensionValuesRequest: shared.GetDimensionValuesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDimensionValuesXAmzTargetEnum;
}
export declare class GetDimensionValuesResponse extends SpeakeasyBase {
    /**
     * BillExpirationException
     */
    billExpirationException?: any;
    contentType: string;
    /**
     * DataUnavailableException
     */
    dataUnavailableException?: any;
    /**
     * Success
     */
    getDimensionValuesResponse?: shared.GetDimensionValuesResponse;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * RequestChangedException
     */
    requestChangedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
