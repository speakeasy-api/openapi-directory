import { SpeakeasyBase } from "../../../internal/utils";
import { StoreAlertProperty } from "./storealertproperty";
export declare class SaveStoreAlertRequest extends SpeakeasyBase {
    /**
     * Is the alert enable ?
     */
    enabled: boolean;
    /**
     * Properties to configure the alert
     */
    properties?: StoreAlertProperty[];
}
