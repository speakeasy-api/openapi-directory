import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { MeasureValue } from "./measurevalue";
import { MeasureValueTypeEnum } from "./measurevaluetypeenum";
import { TimeUnitEnum } from "./timeunitenum";
/**
 * <p>Represents a time-series data point being written into Timestream. Each record contains an array of dimensions. Dimensions represent the metadata attributes of a time-series data point, such as the instance name or Availability Zone of an EC2 instance. A record also contains the measure name, which is the name of the measure being collected (for example, the CPU utilization of an EC2 instance). Additionally, a record contains the measure value and the value type, which is the data type of the measure value. Also, the record contains the timestamp of when the measure was collected and the timestamp unit, which represents the granularity of the timestamp. </p> <p> Records have a <code>Version</code> field, which is a 64-bit <code>long</code> that you can use for updating data points. Writes of a duplicate record with the same dimension, timestamp, and measure name but different measure value will only succeed if the <code>Version</code> attribute of the record in the write request is higher than that of the existing record. Timestream defaults to a <code>Version</code> of <code>1</code> for records without the <code>Version</code> field. </p>
 */
export declare class RecordT extends SpeakeasyBase {
    dimensions?: Dimension[];
    measureName?: string;
    measureValue?: string;
    measureValueType?: MeasureValueTypeEnum;
    measureValues?: MeasureValue[];
    time?: string;
    timeUnit?: TimeUnitEnum;
    version?: number;
}
