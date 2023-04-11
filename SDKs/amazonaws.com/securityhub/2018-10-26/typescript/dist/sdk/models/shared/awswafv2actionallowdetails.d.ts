import { SpeakeasyBase } from "../../../internal/utils";
import { AwsWafv2CustomRequestHandlingDetails } from "./awswafv2customrequesthandlingdetails";
/**
 *  Specifies that WAF should allow the request and optionally defines additional custom handling for the request.
 */
export declare class AwsWafv2ActionAllowDetails extends SpeakeasyBase {
    customRequestHandling?: AwsWafv2CustomRequestHandlingDetails;
}
