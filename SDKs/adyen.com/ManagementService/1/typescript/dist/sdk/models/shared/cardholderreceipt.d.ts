import { SpeakeasyBase } from "../../../internal/utils";
export declare class CardholderReceipt extends SpeakeasyBase {
    /**
     * A custom header to show on the shopper receipt for an authorised transaction. Allows one or two comma-separated header lines, and blank lines. For example, `header,header,filler`
     */
    headerForAuthorizedReceipt?: string;
}
