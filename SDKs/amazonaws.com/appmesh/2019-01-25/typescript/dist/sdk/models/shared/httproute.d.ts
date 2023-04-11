import { SpeakeasyBase } from "../../../internal/utils";
import { HttpRetryPolicy } from "./httpretrypolicy";
import { HttpRouteAction } from "./httprouteaction";
import { HttpRouteMatch } from "./httproutematch";
import { HttpTimeout } from "./httptimeout";
/**
 * An object that represents an HTTP or HTTP/2 route type.
 */
export declare class HttpRoute extends SpeakeasyBase {
    action: HttpRouteAction;
    match: HttpRouteMatch;
    retryPolicy?: HttpRetryPolicy;
    timeout?: HttpTimeout;
}
