import { SpeakeasyBase } from "../../../internal/utils";
import { PermitRestriction } from "./permitrestriction";
export declare class Permit extends SpeakeasyBase {
    /**
     * Partner ID (when using the permit-per-partner token sharing model).
     */
    partnerId?: string;
    /**
     * The profile to apply to this permit (when using the shared permits model).
     */
    profileReference?: string;
    restriction?: PermitRestriction;
    /**
     * The key to link permit requests to permit results.
     */
    resultKey?: string;
    /**
     * The expiry date for this permit.
     */
    validTillDate?: Date;
}
