import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCustomerServiceMetricSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetCustomerServiceMetricRequest extends SpeakeasyBase {
    /**
     * Use this path parameter to specify the type of customer service metrics and benchmark data you want returned for the seller. Supported types are: ITEM_NOT_AS_DESCRIBED ITEM_NOT_RECEIVED
     */
    customerServiceMetricType: string;
    /**
     * Use this query parameter to specify the Marketplace ID to evaluate for the customer service metrics and benchmark data. For the list of supported marketplaces, see Analytics API requirements and restrictions. For implementation help, refer to eBay API documentation at https://developer.ebay.com/devzone/rest/api-ref/analytics/types/MarketplaceIdEnum.html
     */
    evaluationMarketplaceId: string;
    /**
     * Use this path parameter to specify the type of the seller evaluation you want returned, either: CURRENT &ndash; A monthly evaluation that occurs on the 20th of every month. PROJECTED &ndash; A daily evaluation that provides a projection of how the seller is currently performing with regards to the upcoming evaluation period.
     */
    evaluationType: string;
}
export declare class GetCustomerServiceMetricResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getCustomerServiceMetricResponse?: shared.GetCustomerServiceMetricResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
