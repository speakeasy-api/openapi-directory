import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CatalogColumn } from "./catalogcolumn";



// ConfigureCatalogColumnCatalogRequest
/** 
 * The request to configure a catalog column
**/
export class ConfigureCatalogColumnCatalogRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=catalogColumn" })
  catalogColumn: CatalogColumn;
}
