import { SpeakeasyBase } from "../../../internal/utils";
import { TermsOfServiceAcceptanceInfo } from "./termsofserviceacceptanceinfo";
/**
 * OK - the request has succeeded.
 */
export declare class GetTermsOfServiceAcceptanceInfosResponse extends SpeakeasyBase {
    /**
     * The Terms of Service acceptance information.
     */
    data?: TermsOfServiceAcceptanceInfo[];
}
