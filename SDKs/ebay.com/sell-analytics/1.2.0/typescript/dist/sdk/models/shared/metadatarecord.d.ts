import { SpeakeasyBase } from "../../../internal/utils";
import { Value } from "./value";
/**
 * A complex type that defines the data records returned in the report.
 */
export declare class MetadataRecord extends SpeakeasyBase {
    /**
     * A list of data in a row returned in the traffic report. The data in each of the cells match the labels in headers of the report.
     */
    metadataValues?: Value[];
    /**
     * A complex type that contains a value, plus the veracity of that value.
     */
    value?: Value;
}
