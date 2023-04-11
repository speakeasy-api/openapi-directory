import { SpeakeasyBase } from "../../../internal/utils";
import { AwsWafv2CustomHttpHeader } from "./awswafv2customhttpheader";
/**
 *  Custom request handling behavior that inserts custom headers into a web request. WAF uses custom request handling when the rule action doesn't block the request.
 */
export declare class AwsWafv2CustomRequestHandlingDetails extends SpeakeasyBase {
    insertHeaders?: AwsWafv2CustomHttpHeader[];
}
