import { SpeakeasyBase } from "../../../internal/utils";
import { AccountDetails } from "./accountdetails";
import { SendQuota } from "./sendquota";
import { SuppressionAttributes } from "./suppressionattributes";
import { VdmAttributes } from "./vdmattributes";
/**
 * A list of details about the email-sending capabilities of your Amazon SES account in the current Amazon Web Services Region.
 */
export declare class GetAccountResponse extends SpeakeasyBase {
    dedicatedIpAutoWarmupEnabled?: boolean;
    details?: AccountDetails;
    enforcementStatus?: string;
    productionAccessEnabled?: boolean;
    sendQuota?: SendQuota;
    sendingEnabled?: boolean;
    suppressionAttributes?: SuppressionAttributes;
    vdmAttributes?: VdmAttributes;
}
