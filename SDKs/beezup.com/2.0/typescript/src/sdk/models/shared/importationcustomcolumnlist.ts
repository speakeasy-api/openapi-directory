import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportationCustomColumn } from "./importationcustomcolumn";
import { CustomColumnListLinks } from "./customcolumnlistlinks";



export class ImportationCustomColumnList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customColumns", elemType: ImportationCustomColumn })
  customColumns: ImportationCustomColumn[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: CustomColumnListLinks;
}
