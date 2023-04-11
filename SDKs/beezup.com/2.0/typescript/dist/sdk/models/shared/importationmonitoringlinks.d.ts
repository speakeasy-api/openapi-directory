import { SpeakeasyBase } from "../../../internal/utils";
import { LinksImportationActivateAutoImportLink } from "./linksimportationactivateautoimportlink";
import { LinksImportationCancelLink } from "./linksimportationcancellink";
import { LinksImportationCommitColumnsLink } from "./linksimportationcommitcolumnslink";
import { LinksImportationCommitLink } from "./linksimportationcommitlink";
import { LinksImportationConfigureRemainingCatalogColumnsLink } from "./linksimportationconfigureremainingcatalogcolumnslink";
import { LinksImportationGetCustomColumnsLink } from "./linksimportationgetcustomcolumnslink";
import { LinksImportationGetDetectedCatalogColumnsLink } from "./linksimportationgetdetectedcatalogcolumnslink";
import { LinksImportationGetImportationMonitoringLink } from "./linksimportationgetimportationmonitoringlink";
import { LinksImportationGetProductSampleLink } from "./linksimportationgetproductsamplelink";
import { LinksImportationTechnicalProgressionLink } from "./linksimportationtechnicalprogressionlink";
/**
 * Applicable operations considering the state of the importation
 */
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
