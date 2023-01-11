import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Value } from "./value";



// RecordT
/** 
 * Type that defines the fields of the individual record of the report.
**/
export class RecordT extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionValues", elemType: Value })
  dimensionValues?: Value[];

  @SpeakeasyMetadata({ data: "json, name=metricValues", elemType: Value })
  metricValues?: Value[];
}
