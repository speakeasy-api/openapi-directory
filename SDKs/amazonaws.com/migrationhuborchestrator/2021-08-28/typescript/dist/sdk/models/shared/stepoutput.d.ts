import { SpeakeasyBase } from "../../../internal/utils";
import { DataTypeEnum } from "./datatypeenum";
/**
 * The output of the step.
 */
export declare class StepOutput extends SpeakeasyBase {
    dataType?: DataTypeEnum;
    name?: string;
    required?: boolean;
}
