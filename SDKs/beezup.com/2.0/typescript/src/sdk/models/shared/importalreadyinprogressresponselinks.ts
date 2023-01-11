import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksImportationCancelLink } from "./linksimportationcancellink";
import { LinksImportationGetImportationMonitoringLink } from "./linksimportationgetimportationmonitoringlink";



// ImportAlreadyInProgressResponseLinks
/** 
 * The action links
**/
export class ImportAlreadyInProgressResponseLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cancelCurrentImportation" })
  cancelCurrentImportation: LinksImportationCancelLink;

  @SpeakeasyMetadata({ data: "json, name=currentImportation" })
  currentImportation: LinksImportationGetImportationMonitoringLink;
}
