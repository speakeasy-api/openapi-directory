import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>A dimension is a name/value pair that is part of the identity of a metric. Because dimensions are part of the unique identifier for a metric, whenever you add a unique name/value pair to one of your metrics, you are creating a new variation of that metric. For example, many Amazon EC2 metrics publish <code>InstanceId</code> as a dimension name, and the actual instance ID as the value for that dimension.</p> <p>You can assign up to 30 dimensions to a metric.</p>
 */
export declare class Dimension extends SpeakeasyBase {
    name: string;
    value: string;
}
