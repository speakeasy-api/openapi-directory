import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DetectedCatalogColumn } from "./detectedcatalogcolumn";
import { DetectedCatalogColumnListLinks } from "./detectedcatalogcolumnlistlinks";



// DetectedCatalogColumnList
/** 
 * The list of detected catalog column
**/
export class DetectedCatalogColumnList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectedCatalogColumns", elemType: DetectedCatalogColumn })
  detectedCatalogColumns?: DetectedCatalogColumn[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: DetectedCatalogColumnListLinks;
}
