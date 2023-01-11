import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ColumnConfiguration } from "./columnconfiguration";
import { CustomColumnLinks } from "./customcolumnlinks";



// CustomColumn
/** 
 * The custom column configuration
**/
export class CustomColumn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=catalogColumnDependencies" })
  catalogColumnDependencies?: string[];

  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration: ColumnConfiguration;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: CustomColumnLinks;

  @SpeakeasyMetadata({ data: "json, name=userColumName" })
  userColumName: string;
}
