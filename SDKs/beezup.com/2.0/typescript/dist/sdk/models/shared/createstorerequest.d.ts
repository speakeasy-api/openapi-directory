import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request to create a store. The store identifier is optional, if null it will be automatically computed.
 */
export declare class CreateStoreRequest extends SpeakeasyBase {
    /**
     * The country iso code alpha 3 based on the list of values /user/lov/StoreCountry
     */
    countryIsoCodeAlpha3: string;
    /**
     * The store identifier
     */
    id?: string;
    /**
     * The store name. Must be unique.
     */
    name: string;
    /**
     * The store's sectors based on the list of values /user/lov/ParamSector
     */
    sectors: string[];
    /**
     * The url of your store
     */
    url: string;
}
