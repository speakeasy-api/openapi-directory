import { SpeakeasyBase } from "../../../internal/utils";
import { OperatorEnum } from "./operatorenum";
import { Range } from "./range";
/**
 *  Contains details regarding the supported field type and the operators that can be applied for filtering.
 */
export declare class FieldTypeDetails extends SpeakeasyBase {
    fieldLengthRange?: Range;
    fieldType: string;
    fieldValueRange?: Range;
    filterOperators: OperatorEnum[];
    supportedDateFormat?: string;
    supportedValues?: string[];
    valueRegexPattern?: string;
}
