import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Items } from "./items";
import { Locations } from "./locations";
import { Merchants } from "./merchants";
import { ModifierGroups } from "./modifiergroups";
import { Modifiers } from "./modifiers";
import { OrderTypes } from "./ordertypes";
import { Orders } from "./orders";
import { Payments } from "./payments";
import { Tenders } from "./tenders";
export declare const ServerList: readonly ["https://unify.apideck.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    items: Items;
    locations: Locations;
    merchants: Merchants;
    modifierGroups: ModifierGroups;
    modifiers: Modifiers;
    orderTypes: OrderTypes;
    orders: Orders;
    payments: Payments;
    tenders: Tenders;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
