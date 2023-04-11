import { SpeakeasyBase } from "../../../internal/utils";
import { DataValue } from "./datavalue";
import { PropertyLatestValue } from "./propertylatestvalue";
/**
 * Success
 */
export declare class GetPropertyValueResponse extends SpeakeasyBase {
    nextToken?: string;
    propertyValues?: Record<string, PropertyLatestValue>;
    tabularPropertyValues?: Record<string, DataValue>[][];
}
