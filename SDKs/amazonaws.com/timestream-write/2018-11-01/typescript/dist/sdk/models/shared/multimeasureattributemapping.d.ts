import { SpeakeasyBase } from "../../../internal/utils";
import { ScalarMeasureValueTypeEnum } from "./scalarmeasurevaluetypeenum";
/**
 * <p/>
 */
export declare class MultiMeasureAttributeMapping extends SpeakeasyBase {
    measureValueType?: ScalarMeasureValueTypeEnum;
    sourceColumn: string;
    targetMultiMeasureAttributeName?: string;
}
