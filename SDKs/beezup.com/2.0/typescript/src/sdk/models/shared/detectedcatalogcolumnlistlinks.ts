import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksImportationGetDetectedCatalogColumnsLink } from "./linksimportationgetdetectedcatalogcolumnslink";



export class DetectedCatalogColumnListLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksImportationGetDetectedCatalogColumnsLink;
}
