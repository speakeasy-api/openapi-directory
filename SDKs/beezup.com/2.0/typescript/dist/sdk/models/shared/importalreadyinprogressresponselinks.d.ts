import { SpeakeasyBase } from "../../../internal/utils";
import { LinksImportationCancelLink } from "./linksimportationcancellink";
import { LinksImportationGetImportationMonitoringLink } from "./linksimportationgetimportationmonitoringlink";
/**
 * The action links
 */
export declare class ImportAlreadyInProgressResponseLinks extends SpeakeasyBase {
    cancelCurrentImportation: LinksImportationCancelLink;
    currentImportation: LinksImportationGetImportationMonitoringLink;
}
