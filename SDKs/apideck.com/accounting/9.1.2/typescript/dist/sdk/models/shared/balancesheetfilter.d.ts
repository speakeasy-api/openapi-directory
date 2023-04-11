import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Apply filters
 */
export declare class BalanceSheetFilter extends SpeakeasyBase {
    /**
     * Filter by end date. If end date is given, start date is required.
     */
    endDate?: string;
    /**
     * Filter by start date. If start date is given, end date is required.
     */
    startDate?: string;
}
