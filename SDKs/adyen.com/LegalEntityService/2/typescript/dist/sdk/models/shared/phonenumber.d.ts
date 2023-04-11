import { SpeakeasyBase } from "../../../internal/utils";
export declare class PhoneNumber extends SpeakeasyBase {
    /**
     * The full phone number, including the country code. For example, **+3112345678**.
     */
    number: string;
    /**
     * The type of phone number.
     *
     * @remarks
     *  Possible values: **mobile**, **landline**, **sip**, **fax.**
     */
    type?: string;
}
