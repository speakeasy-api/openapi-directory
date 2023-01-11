import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RecordT
/** 
 * Specifies the location of an occurrence of sensitive data in an Apache Avro object container, Apache Parquet file, JSON file, or JSON Lines file.
**/
export class RecordT extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jsonPath" })
  jsonPath?: string;

  @SpeakeasyMetadata({ data: "json, name=recordIndex" })
  recordIndex?: number;
}
