import { SpeakeasyBase } from "../../../internal/utils";
import { AccountHolderDetails } from "./accountholderdetails";
export declare class UpdateAccountHolderRequest extends SpeakeasyBase {
    /**
     * The code of the Account Holder to be updated.
     */
    accountHolderCode: string;
    accountHolderDetails?: AccountHolderDetails;
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
