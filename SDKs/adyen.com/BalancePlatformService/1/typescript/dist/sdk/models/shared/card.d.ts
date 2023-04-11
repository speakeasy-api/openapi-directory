import { SpeakeasyBase } from "../../../internal/utils";
import { Authentication } from "./authentication";
import { CardConfiguration } from "./cardconfiguration";
import { Contact } from "./contact";
import { Expiry } from "./expiry";
/**
 * The form factor of the card.
 *
 * @remarks
 * Possible values: **virtual**, **physical**.
 */
export declare enum CardFormFactorEnum {
    Physical = "physical",
    Unknown = "unknown",
    Virtual = "virtual"
}
export declare class Card extends SpeakeasyBase {
    authentication?: Authentication;
    /**
     * The bank identification number (BIN) of the card number.
     */
    bin?: string;
    /**
     * The brand of the physical or the virtual card.
     *
     * @remarks
     * Possible values: **visa**, **mc**.
     */
    brand: string;
    /**
     * The brand variant of the physical or the virtual card.
     *
     * @remarks
     * >Contact your Adyen Implementation Manager to get the values that are relevant to your integration. Examples: **visadebit**, **mcprepaid**.
     */
    brandVariant: string;
    /**
     * The name of the cardholder.
     *
     * @remarks
     *  Maximum length: 26 characters.
     */
    cardholderName: string;
    configuration?: CardConfiguration;
    /**
     * The CVC2 value of the card.
     *
     * @remarks
     * > The CVC2 is not sent by default. This is only returned in the `POST` response for single-use virtual cards.
     */
    cvc?: string;
    deliveryContact?: Contact;
    expiration?: Expiry;
    /**
     * The form factor of the card.
     *
     * @remarks
     * Possible values: **virtual**, **physical**.
     */
    formFactor: CardFormFactorEnum;
    /**
     * Last last four digits of the card number.
     */
    lastFour?: string;
    /**
     * The primary account number (PAN) of the card.
     *
     * @remarks
     * > The PAN is masked by default and returned only for single-use virtual cards.
     */
    number: string;
}
