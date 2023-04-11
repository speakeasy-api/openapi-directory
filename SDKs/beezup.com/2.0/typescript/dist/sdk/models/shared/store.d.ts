import { SpeakeasyBase } from "../../../internal/utils";
import { StoreLinks } from "./storelinks";
import { StoreStatusEnum } from "./storestatusenum";
import { StoreUserRoleEnum } from "./storeuserroleenum";
/**
 * The store information
 */
export declare class Store extends SpeakeasyBase {
    /**
     * The country iso code alpha 3 based on the list of values /user/lov/StoreCountry
     */
    countryIsoCodeAlpha3: string;
    /**
     * The creation date of the store
     */
    creationUtcDate: Date;
    /**
     * The currency code <a href="https://en.wikipedia.org/wiki/ISO_4217">(ISO 4217)</a>
     *
     * @remarks
     *
     */
    currencyCode: string;
    /**
     * The version of GO to use
     */
    goVersion: number;
    /**
     * Is the store a test or a production store
     */
    isTest: boolean;
    /**
     * The action links for this store
     */
    links: StoreLinks;
    /**
     * The store name. Must be unique.
     */
    name: string;
    /**
     * The offer id based on /offers. Not a free offer of course.
     */
    offerId: number;
    /**
     * The offer Name
     */
    offerName: string;
    /**
     * The user id of the owner of the store
     */
    ownerUserId: string;
    /**
     * The store's sectors based on the list of values /user/lov/ParamSector
     */
    sectors: string[];
    /**
     * The share count related to this store
     */
    shareCount: number;
    /**
     * The store status
     *
     * @remarks
     * * Active:  When the store is active
     * * SystemBlocked:  When the store is blocked by the system
     * * UserBlocked: When the store is blocked on GO not on the system
     *
     */
    status: StoreStatusEnum;
    /**
     * The store identifier
     */
    storeId: string;
    /**
     * The url of your store
     */
    url: string;
    /**
     * Indicates the role can have a user on a store.
     *
     * @remarks
     * * Owner: Indicates that you are the owner of this store
     * * User: Indicates that you are a simple user on this store
     *
     */
    userRole: StoreUserRoleEnum;
}
