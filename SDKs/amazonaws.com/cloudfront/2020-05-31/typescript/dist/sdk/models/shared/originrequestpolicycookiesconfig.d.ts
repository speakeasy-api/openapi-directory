import { SpeakeasyBase } from "../../../internal/utils";
import { CookieNames } from "./cookienames";
import { OriginRequestPolicyCookieBehaviorEnum } from "./originrequestpolicycookiebehaviorenum";
/**
 * An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in requests that CloudFront sends to the origin.
 */
export declare class OriginRequestPolicyCookiesConfig extends SpeakeasyBase {
    cookieBehavior: OriginRequestPolicyCookieBehaviorEnum;
    /**
     * Contains a list of cookie names.
     */
    cookies?: CookieNames;
}
