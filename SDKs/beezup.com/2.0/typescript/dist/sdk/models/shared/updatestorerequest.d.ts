import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateStoreRequest extends SpeakeasyBase {
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
