import { SpeakeasyBase } from "../../../internal/utils";
import { DataType } from "./datatype";
import { DataValue } from "./datavalue";
/**
 * An object that sets information about a property.
 */
export declare class PropertyDefinitionRequest extends SpeakeasyBase {
    configuration?: Record<string, string>;
    dataType?: DataType;
    defaultValue?: DataValue;
    displayName?: string;
    isExternalId?: boolean;
    isRequiredInEntity?: boolean;
    isStoredExternally?: boolean;
    isTimeSeries?: boolean;
}
