import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ColumnConfiguration } from "./columnconfiguration";
import { DuplicateProductValueConfiguration } from "./duplicateproductvalueconfiguration";
import { DetectedCatalogColumnLinks } from "./detectedcatalogcolumnlinks";



// DetectedCatalogColumn
/** 
 * The catalog column detected during the first parsing step
**/
export class DetectedCatalogColumn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=catalogColumnName" })
  catalogColumnName: string;

  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration: ColumnConfiguration;

  @SpeakeasyMetadata({ data: "json, name=duplicateProductValueConfiguration" })
  duplicateProductValueConfiguration?: DuplicateProductValueConfiguration;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=ignored" })
  ignored?: boolean;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: DetectedCatalogColumnLinks;

  @SpeakeasyMetadata({ data: "json, name=userColumName" })
  userColumName: string;
}
