import { SpeakeasyBase } from "../../../internal/utils";
import { Resource } from "./resource";
/**
 * This complex types defines the resource (such as an API method) for which the rate-limit data is returned.  <br><br>A method is included in an API, and an API is part of an API context for the API version specified.
 */
export declare class RateLimit extends SpeakeasyBase {
    /**
     * The context of the API for which rate-limit data is returned. For example <code>buy</code>, <code>sell</code>, <code>commerce</code>, <code>developer</code> or <code>tradingapi</code>.
     */
    apiContext?: string;
    /**
     * The name of the API for which rate-limit data is returned. For example <code>browse</code> for the Buy API, <code>inventory</code> for the Sell API, <code>taxonomy</code> for the Commerce API, or <code>tradingapi</code> for Trading API.
     */
    apiName?: string;
    /**
     * The version of the API for which rate-limit data is returned. For example <code>v1</code> or <code>v2</code>.
     */
    apiVersion?: string;
    /**
     * A list of the methods for which rate-limit data is returned. For example <code>item</code> for the Feed API, <code>getOrder</code> for the Fulfillment API, <code>getProduct</code> for the Catalog API, <code>AddItems</code> for the Trading API.
     */
    resources?: Resource[];
}
