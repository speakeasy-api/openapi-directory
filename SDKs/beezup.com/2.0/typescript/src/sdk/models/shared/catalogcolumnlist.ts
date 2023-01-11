import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CatalogColumn } from "./catalogcolumn";



export class CatalogColumnList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=catalogColumns", elemType: CatalogColumn })
  catalogColumns: CatalogColumn[];
}
