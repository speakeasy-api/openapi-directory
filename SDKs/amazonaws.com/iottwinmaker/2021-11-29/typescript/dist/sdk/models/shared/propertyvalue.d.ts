import { SpeakeasyBase } from "../../../internal/utils";
import { DataValue } from "./datavalue";
/**
 * An object that contains information about a value for a time series property.
 */
export declare class PropertyValue extends SpeakeasyBase {
    time?: string;
    timestamp?: Date;
    value: DataValue;
}
