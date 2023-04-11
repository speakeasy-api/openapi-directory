import { SpeakeasyBase } from "../../../internal/utils";
import { AvsAddress } from "./avsaddress";
/**
 * Expiry month for the test card range.
 *
 * @remarks
 *
 * Allowed values:
 * * JANUARY
 * * FEBRUARY
 * * MARCH
 * * APRIL
 * * MAY
 * * JUNE
 * * JULY
 * * AUGUST
 * * SEPTEMBER
 * * OCTOBER
 * * NOVEMBER
 * * DECEMBER
 */
export declare enum TestCardRangeExpiryMonthEnum {
    April = "APRIL",
    August = "AUGUST",
    December = "DECEMBER",
    February = "FEBRUARY",
    January = "JANUARY",
    July = "JULY",
    June = "JUNE",
    March = "MARCH",
    May = "MAY",
    November = "NOVEMBER",
    October = "OCTOBER",
    September = "SEPTEMBER"
}
/**
 * 3D Secure server response. It notifies whether the specified card holder is enrolled in a 3D Secure service. Possible values:
 *
 * @remarks
 *
 * * Y (Authentication available)
 * * N (Card holder not enrolled/not participating)
 * * U (Unable to authenticate)
 */
export declare enum TestCardRangeThreeDDirectoryServerResponseEnum {
    N = "N",
    U = "U",
    Y = "Y"
}
export declare class TestCardRange extends SpeakeasyBase {
    address?: AvsAddress;
    /**
     * The name of the card holder, as it appears on the card, for the test card range.
     */
    cardHolderName: string;
    /**
     * The test card range security code.
     *
     * @remarks
     *
     * Example: 123
     */
    cvc?: string;
    /**
     * Expiry month for the test card range.
     *
     * @remarks
     *
     * Allowed values:
     * * JANUARY
     * * FEBRUARY
     * * MARCH
     * * APRIL
     * * MAY
     * * JUNE
     * * JULY
     * * AUGUST
     * * SEPTEMBER
     * * OCTOBER
     * * NOVEMBER
     * * DECEMBER
     */
    expiryMonth: TestCardRangeExpiryMonthEnum;
    /**
     * Expiry year for the test card range.
     *
     * @remarks
     *
     * Example: 2020
     */
    expiryYear: number;
    /**
     * The last test card number in the test card range (inclusive):
     *
     * @remarks
     *
     * * Min 6, max 19 digits
     * * BIN compliant
     * Example: 5432 1234 1234 4321
     */
    rangeEnd: string;
    /**
     * The first test card number in the test card range (inclusive):
     *
     * @remarks
     *
     * * Min 6, max 19 digits
     * * BIN compliant
     * Example: 5432 1234 1234 1234
     */
    rangeStart: string;
    /**
     * 3D Secure server response. It notifies whether the specified card holder is enrolled in a 3D Secure service. Possible values:
     *
     * @remarks
     *
     * * Y (Authentication available)
     * * N (Card holder not enrolled/not participating)
     * * U (Unable to authenticate)
     */
    threeDDirectoryServerResponse?: TestCardRangeThreeDDirectoryServerResponseEnum;
    /**
     * The password used for 3D Secure authentication.
     */
    threeDPassword?: string;
    /**
     * The username used for 3D Secure authentication.
     */
    threeDUsername?: string;
}
