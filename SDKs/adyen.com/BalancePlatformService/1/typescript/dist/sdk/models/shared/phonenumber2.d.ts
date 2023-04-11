import { SpeakeasyBase } from "../../../internal/utils";
export declare class PhoneNumber2 extends SpeakeasyBase {
    /**
     * The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code. For example, **US** or **NL**.
     */
    countryCode?: string;
    /**
     * The phone number.
     */
    number: string;
    /**
     * The type of phone number.
     *
     * @remarks
     *  Possible values: **mobile**, **landline**, **sip**, **fax.**
     */
    type: string;
}
