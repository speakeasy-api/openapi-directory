import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request to create a store. The store identifier is optional, if null it will be automatically computed.
**/
export declare class CreateStoreRequest extends SpeakeasyBase {
    countryIsoCodeAlpha3: string;
    id?: string;
    name: string;
    sectors: string[];
    url: string;
}
