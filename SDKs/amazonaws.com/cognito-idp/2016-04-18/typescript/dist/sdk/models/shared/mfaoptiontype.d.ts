import { SpeakeasyBase } from "../../../internal/utils";
import { DeliveryMediumTypeEnum } from "./deliverymediumtypeenum";
/**
 *  <i>This data type is no longer supported.</i> Applies only to SMS multi-factor authentication (MFA) configurations. Does not apply to time-based one-time password (TOTP) software token MFA configurations.
 */
export declare class MFAOptionType extends SpeakeasyBase {
    attributeName?: string;
    deliveryMedium?: DeliveryMediumTypeEnum;
}
