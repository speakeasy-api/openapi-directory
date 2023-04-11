import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Locale
 */
export declare class Locale extends SpeakeasyBase {
    /**
     * Continent name. This field support localization.
     */
    continent: string;
    /**
     * Continent code. A two character continent code "AF" for Africa, "AN" for Antarctica, "AS" for Asia, "EU" for Europe, "NA" for North America, "OC" for Oceania, and "SA" for South America.
     */
    continentCode: string;
    /**
     * Country name. This field support localization.
     */
    country: string;
    /**
     * Country code in [ISO 3166-1](http://en.wikipedia.org/wiki/ISO_3166-1) two-character format
     */
    countryCode: string;
    /**
     * Currency code in [ISO 4217-1](http://en.wikipedia.org/wiki/ISO_4217) three-character format
     */
    currency: string;
    /**
     * True if country is part of the Europian Union.
     */
    eu: boolean;
    /**
     * User IP address.
     */
    ip: string;
}
