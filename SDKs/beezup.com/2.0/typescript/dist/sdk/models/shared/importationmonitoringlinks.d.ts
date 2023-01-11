import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * Applicable operations considering the state of the importation
**/
export declare class ImportationMonitoringLinks extends SpeakeasyBase {
    activateAutoImport?: LinksImportationActivateAutoImportLink;
    cancel?: LinksImportationCancelLink;
    catalogColumns?: LinksImportationGetDetectedCatalogColumnsLink;
    commit?: LinksImportationCommitLink;
    commitColumns?: LinksImportationCommitColumnsLink;
    configureRemainingCatalogColumns?: LinksImportationConfigureRemainingCatalogColumnsLink;
    customColumns?: LinksImportationGetCustomColumnsLink;
    productSamples?: LinksImportationGetProductSampleLink;
    self: LinksImportationGetImportationMonitoringLink;
    technicalProgression: LinksImportationTechnicalProgressionLink;
}
