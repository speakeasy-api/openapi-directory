import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserRateLimitsSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetUserRateLimitsRequest extends SpeakeasyBase {
    /**
     * This optional query parameter filters the result to include only the specified API context. <br><br><b>Valid values:</b> <ul><li><code>buy</code></li> <li><code>sell</code></li> <li><code>commerce</code></li> <li><code>developer</code></li> <li><code>tradingapi</code></li></ul>
     */
    apiContext?: string;
    /**
     * This optional query parameter filters the result to include only the APIs specified. <br><br><b>Example values:</b> <ul><li><code>browse</code> for the <a href="/../develop/apis/restful-apis/buy-apis#buy-apis" target="_blank">Buy APIs</a></li> <li><code>inventory</code> for the <a href="/../develop/apis/restful-apis/sell-apis#sell-apis" target="_blank">Sell APIs</a></li>  <li><code>taxonomy</code> for the <a href="/../develop/apis/restful-apis/commerce-apis#commerce-apis" target="_blank">Commerce APIs</a></li>  <li><code>tradingapi</code> for the <a href="/../Devzone/XML/docs/Reference/eBay/index.html" target="_blank">Trading APIs</a></li></ul>
     */
    apiName?: string;
}
export declare class GetUserRateLimitsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    rateLimitsResponse?: shared.RateLimitsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
