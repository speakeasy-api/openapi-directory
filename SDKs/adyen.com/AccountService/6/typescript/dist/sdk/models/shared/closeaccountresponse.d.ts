import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorFieldType } from "./errorfieldtype";
/**
 * The new status of the account.
 *
 * @remarks
 * >Permitted values: `Active`, `Inactive`, `Suspended`, `Closed`.
 */
export declare enum CloseAccountResponseStatusEnum {
    Active = "Active",
    Closed = "Closed",
    Inactive = "Inactive",
    Suspended = "Suspended"
}
/**
 * OK - the request has succeeded.
 */
export declare class CloseAccountResponse extends SpeakeasyBase {
    /**
     * The account code of the account that is closed.
     */
    accountCode?: string;
    /**
     * Contains field validation errors that would prevent requests from being processed.
     */
    invalidFields?: ErrorFieldType[];
    /**
     * The reference of a request. Can be used to uniquely identify the request.
     */
    pspReference?: string;
    /**
     * The result code.
     */
    resultCode?: string;
    /**
     * The new status of the account.
     *
     * @remarks
     * >Permitted values: `Active`, `Inactive`, `Suspended`, `Closed`.
     */
    status?: CloseAccountResponseStatusEnum;
}
