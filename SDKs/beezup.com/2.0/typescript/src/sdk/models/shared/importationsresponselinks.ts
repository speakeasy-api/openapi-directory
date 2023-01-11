import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksImportationGetReportingsLink } from "./linksimportationgetreportingslink";
import { LinksImportationStartManualUpdateLink } from "./linksimportationstartmanualupdatelink";



export class ImportationsResponseLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: LinksImportationGetReportingsLink;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: LinksImportationStartManualUpdateLink;
}
