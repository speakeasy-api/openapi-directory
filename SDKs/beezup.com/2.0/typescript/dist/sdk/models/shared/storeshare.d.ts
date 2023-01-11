import { SpeakeasyBase } from "../../../internal/utils";
import { StoreShareLinks } from "./storesharelinks";
import { StoreUserRoleEnum } from "./storeuserroleenum";
export declare class StoreShare extends SpeakeasyBase {
    links: StoreShareLinks;
    userId: string;
    userRole: StoreUserRoleEnum;
}
