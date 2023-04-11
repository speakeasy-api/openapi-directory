import { SpeakeasyBase } from "../../../internal/utils";
import { MeasureValueTypeEnum } from "./measurevaluetypeenum";
/**
 * <p> Represents the data attribute of the time series. For example, the CPU utilization of an EC2 instance or the RPM of a wind turbine are measures. MeasureValue has both name and value. </p> <p> MeasureValue is only allowed for type <code>MULTI</code>. Using <code>MULTI</code> type, you can pass multiple data attributes associated with the same time series in a single record </p>
 */
export declare class MeasureValue extends SpeakeasyBase {
    name: string;
    type: MeasureValueTypeEnum;
    value: string;
}
