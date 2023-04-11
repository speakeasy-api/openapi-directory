import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
export declare class PermitRestriction extends SpeakeasyBase {
    maxAmount?: Amount;
    singleTransactionLimit?: Amount;
    /**
     * Only a single payment can be made using this permit if set to true, otherwise multiple payments are allowed.
     */
    singleUse?: boolean;
}
