import { SpeakeasyBase } from "../../../internal/utils";
import { StoreAlertLinks } from "./storealertlinks";
import { StoreAlertPropertyInfo } from "./storealertpropertyinfo";
export declare class StoreAlert extends SpeakeasyBase {
    alertId: number;
    alertName: string;
    enabled: boolean;
    links: StoreAlertLinks;
    properties?: StoreAlertPropertyInfo[];
}
