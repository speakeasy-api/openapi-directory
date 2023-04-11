import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValueTypeEnum } from "./dimensionvaluetypeenum";
/**
 * Represents the metadata attributes of the time series. For example, the name and Availability Zone of an EC2 instance or the name of the manufacturer of a wind turbine are dimensions.
 */
export declare class Dimension extends SpeakeasyBase {
    dimensionValueType?: DimensionValueTypeEnum;
    name: string;
    value: string;
}
