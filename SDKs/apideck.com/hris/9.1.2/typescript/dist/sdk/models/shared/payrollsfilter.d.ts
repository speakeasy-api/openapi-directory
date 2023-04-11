import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Apply filters
 */
export declare class PayrollsFilter extends SpeakeasyBase {
    /**
     * Return payrolls whose pay period is before the end date
     */
    endDate?: string;
    /**
     * Return payrolls whose pay period is after the start date
     */
    startDate?: string;
}
