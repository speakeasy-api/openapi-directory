import { SpeakeasyBase } from "../../../internal/utils";
import { AwsWafv2CustomResponseDetails } from "./awswafv2customresponsedetails";
/**
 *  Specifies that WAF should block the request and optionally defines additional custom handling for the response to the web request.
 */
export declare class AwsWafv2ActionBlockDetails extends SpeakeasyBase {
    customResponse?: AwsWafv2CustomResponseDetails;
}
