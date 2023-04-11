import { SpeakeasyBase } from "../../../internal/utils";
import { StoreShareLinks } from "./storesharelinks";
import { StoreUserRoleEnum } from "./storeuserroleenum";
export declare class StoreShare extends SpeakeasyBase {
    /**
     * The different actions you can make on this store share
     */
    links: StoreShareLinks;
    /**
     * The user identifier
     */
    userId: string;
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
