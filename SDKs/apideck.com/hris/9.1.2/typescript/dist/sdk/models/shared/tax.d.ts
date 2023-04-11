import { SpeakeasyBase } from "../../../internal/utils";
export declare class Tax extends SpeakeasyBase {
    /**
     * The amount of the tax.
     */
    amount?: number;
    /**
     * Paid by employer.
     */
    employer?: boolean;
    /**
     * The name of the tax.
     */
    name?: string;
}
