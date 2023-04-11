import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListingFinance extends SpeakeasyBase {
    /**
     * Down payment for this finance offer
     */
    downPayment?: number;
    /**
     * down payment percentage for this finance offer
     */
    downPaymentPercentage?: number;
    /**
     * estimated monthly payment for this finance offer
     */
    estimatedMonthlyPayment?: number;
    /**
     * Loan APR for this finance offer
     */
    loanApr?: number;
    /**
     * Loan term for this finance offer
     */
    loanTerm?: number;
}
