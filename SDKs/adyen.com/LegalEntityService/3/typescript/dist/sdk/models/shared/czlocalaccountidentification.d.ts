import { SpeakeasyBase } from "../../../internal/utils";
/**
 * **czLocal**
 */
export declare enum CZLocalAccountIdentificationTypeEnum {
    CzLocal = "czLocal"
}
/**
 * Identification of the bank account.
 */
export declare class CZLocalAccountIdentification extends SpeakeasyBase {
    /**
     * The 2- to 16-digit bank account number (Číslo účtu) in the following format:
     *
     * @remarks
     *
     * - The optional prefix (předčíslí).
     *
     * - The required second part (základní část) which must be at least two non-zero digits.
     *
     * Examples:
     *
     * - **19-123457** (with prefix)
     *
     * - **123457** (without prefix)
     *
     * - **000019-0000123457** (with prefix, normalized)
     *
     * - **000000-0000123457** (without prefix, normalized)
     */
    accountNumber: string;
    /**
     * The 4-digit bank code (Kód banky), without separators or whitespace.
     */
    bankCode: string;
    /**
     * **czLocal**
     */
    type: CZLocalAccountIdentificationTypeEnum;
}
