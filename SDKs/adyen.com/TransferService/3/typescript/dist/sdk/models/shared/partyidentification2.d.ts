import { SpeakeasyBase } from "../../../internal/utils";
import { Address2 } from "./address2";
/**
 * The type of entity that owns the bank account.
 *
 * @remarks
 *
 *  Possible values: **individual**, **organization**, or **unknown**.
 */
export declare enum PartyIdentification2TypeEnum {
    Individual = "individual",
    Organization = "organization",
    Unknown = "unknown"
}
export declare class PartyIdentification2 extends SpeakeasyBase {
    address?: Address2;
    /**
     * First name of the individual. Required when `type` is **individual**.
     */
    firstName?: string;
    /**
     * The name of the entity.
     */
    fullName: string;
    /**
     * Last name of the individual. Required when `type` is **individual**.
     */
    lastName?: string;
    /**
     * The type of entity that owns the bank account.
     *
     * @remarks
     *
     *  Possible values: **individual**, **organization**, or **unknown**.
     */
    type?: PartyIdentification2TypeEnum;
}
