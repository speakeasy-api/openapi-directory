import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ColumnConfiguration } from "./columnconfiguration";
import { ImportationCustomColumnLinks } from "./importationcustomcolumnlinks";



// ImportationCustomColumn
/** 
 * The custom column configuration
**/
export class ImportationCustomColumn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration: ColumnConfiguration;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: ImportationCustomColumnLinks;

  @SpeakeasyMetadata({ data: "json, name=userColumName" })
  userColumName: string;
}
