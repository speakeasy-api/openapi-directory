import { SpeakeasyBase } from "../../../internal/utils";
export declare class KYCCheckSummary extends SpeakeasyBase {
    /**
     * The code of the check. For possible values, refer to [Verification codes](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/verification-codes).
     */
    kycCheckCode?: number;
    /**
     * A description of the check.
     */
    kycCheckDescription?: string;
}
