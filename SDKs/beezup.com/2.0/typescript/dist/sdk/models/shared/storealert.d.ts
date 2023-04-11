import { SpeakeasyBase } from "../../../internal/utils";
import { StoreAlertLinks } from "./storealertlinks";
import { StoreAlertPropertyInfo } from "./storealertpropertyinfo";
export declare class StoreAlert extends SpeakeasyBase {
    /**
     * Alert identifier
     */
    alertId: number;
    /**
     * The alert name
     */
    alertName: string;
    /**
     * Is the alert enable ?
     */
    enabled: boolean;
    /**
     * The different actions you can make on this alert
     */
    links: StoreAlertLinks;
    /**
     * The current configuration properties of the alert
     */
    properties?: StoreAlertPropertyInfo[];
}
