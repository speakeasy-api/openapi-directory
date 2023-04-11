import { SpeakeasyBase } from "../../../internal/utils";
import { DataType } from "./datatype";
import { DataValue } from "./datavalue";
/**
 * An object that contains response data from a property definition request.
 */
export declare class PropertyDefinitionResponse extends SpeakeasyBase {
    configuration?: Record<string, string>;
    dataType: DataType;
    defaultValue?: DataValue;
    displayName?: string;
    isExternalId: boolean;
    isFinal: boolean;
    isImported: boolean;
    isInherited: boolean;
    isRequiredInEntity: boolean;
    isStoredExternally: boolean;
    isTimeSeries: boolean;
}
