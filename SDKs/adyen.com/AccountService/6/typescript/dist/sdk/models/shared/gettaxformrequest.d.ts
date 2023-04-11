import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTaxFormRequest extends SpeakeasyBase {
    /**
     * The account holder code you provided when you created the account holder.
     */
    accountHolderCode: string;
    /**
     * Type of the requested tax form. For example, 1099-K.
     */
    formType: string;
    /**
     * Applicable tax year in the YYYY format.
     */
    year: number;
}
