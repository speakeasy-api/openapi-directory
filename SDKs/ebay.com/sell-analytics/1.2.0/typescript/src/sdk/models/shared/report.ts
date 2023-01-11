import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Metadata } from "./metadata";
import { Header } from "./header";
import { RecordT } from "./record";
import { ErrorT } from "./error";



// Report
/** 
 * The complex type that defines that defines the report.
**/
export class Report extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionMetadata", elemType: Metadata })
  dimensionMetadata?: Metadata[];

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=header" })
  header?: Header;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDate" })
  lastUpdatedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=records", elemType: RecordT })
  records?: RecordT[];

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: ErrorT })
  warnings?: ErrorT[];
}
