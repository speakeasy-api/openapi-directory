import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GenerateDataSetXAmzTargetEnum {
    MarketplaceCommerceAnalytics20150701GenerateDataSet = "MarketplaceCommerceAnalytics20150701.GenerateDataSet"
}
export declare class GenerateDataSetRequest extends SpeakeasyBase {
    generateDataSetRequest: shared.GenerateDataSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GenerateDataSetXAmzTargetEnum;
}
export declare class GenerateDataSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    generateDataSetResult?: shared.GenerateDataSetResult;
    /**
     * MarketplaceCommerceAnalyticsException
     */
    marketplaceCommerceAnalyticsException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
