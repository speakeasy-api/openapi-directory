import { SpeakeasyBase } from "../../../internal/utils";
import { StoreLinks } from "./storelinks";
import { StoreStatusEnum } from "./storestatusenum";
import { StoreUserRoleEnum } from "./storeuserroleenum";
export declare class Store extends SpeakeasyBase {
    countryIsoCodeAlpha3: string;
    creationUtcDate: Date;
    currencyCode: string;
    goVersion: number;
    links: StoreLinks;
    name: string;
    offerId: number;
    offerName: string;
    ownerUserId: string;
    sectors: string[];
    shareCount: number;
    status: StoreStatusEnum;
    storeId: string;
    url: string;
    userRole: StoreUserRoleEnum;
}
