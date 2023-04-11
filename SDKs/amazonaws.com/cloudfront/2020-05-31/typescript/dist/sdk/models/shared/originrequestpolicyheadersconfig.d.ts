import { SpeakeasyBase } from "../../../internal/utils";
import { Headers } from "./headers";
import { OriginRequestPolicyHeaderBehaviorEnum } from "./originrequestpolicyheaderbehaviorenum";
/**
 * An object that determines whether any HTTP headers (and if so, which headers) are included in requests that CloudFront sends to the origin.
 */
export declare class OriginRequestPolicyHeadersConfig extends SpeakeasyBase {
    headerBehavior: OriginRequestPolicyHeaderBehaviorEnum;
    /**
     * Contains a list of HTTP header names.
     */
    headers?: Headers;
}
