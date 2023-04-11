import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the phone number.
 *
 * @remarks
 * >The following values are permitted: `Landline`, `Mobile`, `SIP`, `Fax`.
 */
export declare enum ViasPhoneNumberPhoneTypeEnum {
    Fax = "Fax",
    Landline = "Landline",
    Mobile = "Mobile",
    Sip = "SIP"
}
export declare class ViasPhoneNumber extends SpeakeasyBase {
    /**
     * The two-character country code of the phone number.
     *
     * @remarks
     * >The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').
     */
    phoneCountryCode?: string;
    /**
     * The phone number.
     *
     * @remarks
     * >The inclusion of the phone number country code is not necessary.
     */
    phoneNumber?: string;
    /**
     * The type of the phone number.
     *
     * @remarks
     * >The following values are permitted: `Landline`, `Mobile`, `SIP`, `Fax`.
     */
    phoneType?: ViasPhoneNumberPhoneTypeEnum;
}
