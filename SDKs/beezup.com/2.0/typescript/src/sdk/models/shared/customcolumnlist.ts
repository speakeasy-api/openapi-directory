import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomColumn } from "./customcolumn";
import { CustomColumnListLinks } from "./customcolumnlistlinks";



export class CustomColumnList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customColumns", elemType: CustomColumn })
  customColumns: CustomColumn[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: CustomColumnListLinks;
}
