import { SpeakeasyBase } from "../../../internal/utils";
import { AccountHolderDetails } from "./accountholderdetails";
export declare class UpdateAccountHolderRequest extends SpeakeasyBase {
    /**
     * The code of the Account Holder to be updated.
     */
    accountHolderCode: string;
    accountHolderDetails?: AccountHolderDetails;
    /**
     * A description of the account holder, maximum 256 characters. You can use alphanumeric characters (A-Z, a-z, 0-9), white spaces, and underscores `_`.
     */
    description?: string;
    /**
     * The primary three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), to which the account holder should be updated.
     */
    primaryCurrency?: string;
    /**
     * The processing tier to which the Account Holder should be updated.
     *
     * @remarks
     * >The processing tier can not be lowered through this request.
     *
     * >Required if accountHolderDetails are not provided.
     */
    processingTier?: number;
}
