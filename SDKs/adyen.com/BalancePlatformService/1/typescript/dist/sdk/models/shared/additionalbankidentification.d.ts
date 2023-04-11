import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of additional bank identification, depending on the country.
 *
 * @remarks
 *
 * Possible values:
 *
 *  * **gbSortCode**: The 6-digit [UK sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or spaces
 *  * **usRoutingNumber**: The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or spaces.
 */
export declare enum AdditionalBankIdentificationTypeEnum {
    GbSortCode = "gbSortCode",
    UsRoutingNumber = "usRoutingNumber"
}
export declare class AdditionalBankIdentification extends SpeakeasyBase {
    /**
     * The value of the additional bank identification.
     */
    code?: string;
    /**
     * The type of additional bank identification, depending on the country.
     *
     * @remarks
     *
     * Possible values:
     *
     *  * **gbSortCode**: The 6-digit [UK sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or spaces
     *  * **usRoutingNumber**: The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or spaces.
     */
    type?: AdditionalBankIdentificationTypeEnum;
}
