import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksImportationActivateAutoImportLink } from "./linksimportationactivateautoimportlink";
import { LinksImportationCancelLink } from "./linksimportationcancellink";
import { LinksImportationGetDetectedCatalogColumnsLink } from "./linksimportationgetdetectedcatalogcolumnslink";
import { LinksImportationCommitLink } from "./linksimportationcommitlink";
import { LinksImportationCommitColumnsLink } from "./linksimportationcommitcolumnslink";
import { LinksImportationConfigureRemainingCatalogColumnsLink } from "./linksimportationconfigureremainingcatalogcolumnslink";
import { LinksImportationGetCustomColumnsLink } from "./linksimportationgetcustomcolumnslink";
import { LinksImportationGetProductSampleLink } from "./linksimportationgetproductsamplelink";
import { LinksImportationGetImportationMonitoringLink } from "./linksimportationgetimportationmonitoringlink";
import { LinksImportationTechnicalProgressionLink } from "./linksimportationtechnicalprogressionlink";



// ImportationMonitoringLinks
/** 
 * Applicable operations considering the state of the importation
**/
export class ImportationMonitoringLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activateAutoImport" })
  activateAutoImport?: LinksImportationActivateAutoImportLink;

  @SpeakeasyMetadata({ data: "json, name=cancel" })
  cancel?: LinksImportationCancelLink;

  @SpeakeasyMetadata({ data: "json, name=catalogColumns" })
  catalogColumns?: LinksImportationGetDetectedCatalogColumnsLink;

  @SpeakeasyMetadata({ data: "json, name=commit" })
  commit?: LinksImportationCommitLink;

  @SpeakeasyMetadata({ data: "json, name=commitColumns" })
  commitColumns?: LinksImportationCommitColumnsLink;

  @SpeakeasyMetadata({ data: "json, name=configureRemainingCatalogColumns" })
  configureRemainingCatalogColumns?: LinksImportationConfigureRemainingCatalogColumnsLink;

  @SpeakeasyMetadata({ data: "json, name=customColumns" })
  customColumns?: LinksImportationGetCustomColumnsLink;

  @SpeakeasyMetadata({ data: "json, name=productSamples" })
  productSamples?: LinksImportationGetProductSampleLink;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksImportationGetImportationMonitoringLink;

  @SpeakeasyMetadata({ data: "json, name=technicalProgression" })
  technicalProgression: LinksImportationTechnicalProgressionLink;
}
