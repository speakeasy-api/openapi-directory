import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { Metric } from "./metric";
/**
 * This complex type defines a the customer service metrics and seller benchmark performance related to a given dimension.
 */
export declare class DimensionMetric extends SpeakeasyBase {
    /**
     * The fields in this complex type define the dimension, or attributes, by which the associated customer service metric and benchmark data is measured. The value of dimensionKey gets set according to the configuration of the input request. The name and value pair further define dimension under the key.
     */
    dimension?: Dimension;
    /**
     * This is a list of Metric elements where each element contains data and information related to the transactions grouped by the associated dimension.
     */
    metrics?: Metric[];
}
