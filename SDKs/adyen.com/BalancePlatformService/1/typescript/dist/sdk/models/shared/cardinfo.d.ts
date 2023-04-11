import { SpeakeasyBase } from "../../../internal/utils";
import { Authentication } from "./authentication";
import { CardConfiguration } from "./cardconfiguration";
import { Contact } from "./contact";
/**
 * The form factor of the card.
 *
 * @remarks
 * Possible values: **virtual**, **physical**.
 */
export declare enum CardInfoFormFactorEnum {
    Physical = "physical",
    Unknown = "unknown",
    Virtual = "virtual"
}
export declare class CardInfo extends SpeakeasyBase {
    authentication?: Authentication;
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
    deliveryContact?: Contact;
    /**
     * The form factor of the card.
     *
     * @remarks
     * Possible values: **virtual**, **physical**.
     */
    formFactor: CardInfoFormFactorEnum;
}
