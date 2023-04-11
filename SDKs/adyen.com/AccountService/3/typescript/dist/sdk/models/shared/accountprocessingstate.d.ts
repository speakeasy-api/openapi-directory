import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
export declare class AccountProcessingState extends SpeakeasyBase {
    /**
     * The reason why processing has been disabled.
     */
    disableReason?: string;
    /**
     * Indicates whether the processing of payments is allowed.
     */
    disabled?: boolean;
    processedFrom?: Amount;
    processedTo?: Amount;
    /**
     * The processing tier that the account holder occupies.
     */
    tierNumber?: number;
}
