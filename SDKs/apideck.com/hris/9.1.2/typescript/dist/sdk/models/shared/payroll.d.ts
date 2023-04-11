import { SpeakeasyBase } from "../../../internal/utils";
import { Compensation } from "./compensation";
import { PayrollTotals } from "./payrolltotals";
export declare class Payroll extends SpeakeasyBase {
    /**
     * The date on which employees will be paid for the payroll.
     */
    checkDate: string;
    /**
     * The unique identifier of the company.
     */
    companyId?: string;
    /**
     * An array of compensations for the payroll.
     */
    compensations?: Compensation[];
    /**
     * The end date, inclusive, of the pay period.
     */
    endDate: string;
    /**
     * A unique identifier for an object.
     */
    id: string;
    /**
     * Whether or not the payroll has been successfully processed. Note that processed payrolls cannot be updated.
     */
    processed: boolean;
    /**
     * The date the payroll was processed.
     */
    processedDate?: string;
    /**
     * The start date, inclusive, of the pay period.
     */
    startDate: string;
    totals?: PayrollTotals;
}
