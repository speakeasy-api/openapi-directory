import { SpeakeasyBase } from "../../../internal/utils";
import { CachePolicyCookieBehaviorEnum } from "./cachepolicycookiebehaviorenum";
import { CookieNames } from "./cookienames";
/**
 * An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the cache key and in requests that CloudFront sends to the origin.
 */
export declare class CachePolicyCookiesConfig extends SpeakeasyBase {
    cookieBehavior: CachePolicyCookieBehaviorEnum;
    /**
     * Contains a list of cookie names.
     */
    cookies?: CookieNames;
}
