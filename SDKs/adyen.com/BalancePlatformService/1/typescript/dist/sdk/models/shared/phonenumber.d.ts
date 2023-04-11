import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the phone number.
 *
 * @remarks
 * Possible values: **Landline**, **Mobile**, **SIP**, **Fax**.
 */
export declare enum PhoneNumberPhoneTypeEnum {
    Fax = "Fax",
    Landline = "Landline",
    Mobile = "Mobile",
    Sip = "SIP"
}
export declare class PhoneNumber extends SpeakeasyBase {
    /**
     * The two-character ISO-3166-1 alpha-2 country code of the phone number.
     *
     * @remarks
     * For example, **US** or **NL**.
     */
    phoneCountryCode?: string;
    /**
     * The phone number.
     *
     * @remarks
     * The inclusion of the phone number country code is not necessary.
     */
    phoneNumber?: string;
    /**
     * The type of the phone number.
     *
     * @remarks
     * Possible values: **Landline**, **Mobile**, **SIP**, **Fax**.
     */
    phoneType?: PhoneNumberPhoneTypeEnum;
}
