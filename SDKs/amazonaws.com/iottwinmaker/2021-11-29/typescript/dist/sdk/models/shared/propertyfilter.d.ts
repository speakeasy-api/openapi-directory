import { SpeakeasyBase } from "../../../internal/utils";
import { DataValue } from "./datavalue";
/**
 * An object that filters items returned by a property request.
 */
export declare class PropertyFilter extends SpeakeasyBase {
    operator?: string;
    propertyName?: string;
    value?: DataValue;
}
