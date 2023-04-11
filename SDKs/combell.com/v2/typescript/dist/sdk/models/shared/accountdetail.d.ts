import { SpeakeasyBase } from "../../../internal/utils";
import { Addon } from "./addon";
import { Servicepack } from "./servicepack";
/**
 * A detailed representation of an account.
 */
export declare class AccountDetail extends SpeakeasyBase {
    /**
     * A list of addons applied to the account.
     */
    addons?: Addon[];
    /**
     * The id of the account
     */
    id?: number;
    /**
     * Identifier for the account
     */
    identifier?: string;
    /**
     * Servicepack information.
     */
    servicepack?: Servicepack;
}
