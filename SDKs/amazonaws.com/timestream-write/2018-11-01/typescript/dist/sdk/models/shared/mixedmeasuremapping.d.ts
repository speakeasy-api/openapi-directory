import { SpeakeasyBase } from "../../../internal/utils";
import { MeasureValueTypeEnum } from "./measurevaluetypeenum";
import { MultiMeasureAttributeMapping } from "./multimeasureattributemapping";
/**
 * <p/>
 */
export declare class MixedMeasureMapping extends SpeakeasyBase {
    measureName?: string;
    measureValueType: MeasureValueTypeEnum;
    multiMeasureAttributeMappings?: MultiMeasureAttributeMapping[];
    sourceColumn?: string;
    targetMeasureName?: string;
}
