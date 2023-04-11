import { SpeakeasyBase } from "../../../internal/utils";
import { Value } from "./value";
/**
 * Type that defines the fields of the individual record of the report.
 */
export declare class RecordT extends SpeakeasyBase {
    /**
     * A list where each element contains either the string DAY (if the dimension is DAY), or the listing ID for which the record's metric data is computed. A second array member, applicable, is always true for dimension values.
     */
    dimensionValues?: Value[];
    /**
     * A list where each element contains a value field that indicates the record's value for the metric. Each element also contains an applicable field that indicates the veracity of the computed value. Note that there are no metric names or IDs associated with the values returned in this array. The metadata to which these values relate can be found in the key values . The order of the metric values in this array equals the order of the key values in metadataHeader.
     */
    metricValues?: Value[];
}
