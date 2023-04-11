import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdatePayoutSettingsRequest extends SpeakeasyBase {
    /**
     * Indicates if payouts to this bank account are enabled. Default: **true**.
     *
     * @remarks
     *
     * To receive payouts into this bank account, both `enabled` and `allowed` must be **true**.
     */
    enabled?: boolean;
}
