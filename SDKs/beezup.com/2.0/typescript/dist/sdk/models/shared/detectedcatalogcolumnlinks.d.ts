import { SpeakeasyBase } from "../../../internal/utils";
import { LinksImportationConfigureCatalogColumnLink } from "./linksimportationconfigurecatalogcolumnlink";
import { LinksImportationIgnoreColumnLink } from "./linksimportationignorecolumnlink";
import { LinksImportationMapCatalogColumnLink } from "./linksimportationmapcatalogcolumnlink";
import { LinksImportationReattendColumnLink } from "./linksimportationreattendcolumnlink";
import { LinksImportationUnmapCatalogColumnLink } from "./linksimportationunmapcatalogcolumnlink";
export declare class DetectedCatalogColumnLinks extends SpeakeasyBase {
    configure?: LinksImportationConfigureCatalogColumnLink;
    ignore?: LinksImportationIgnoreColumnLink;
    map?: LinksImportationMapCatalogColumnLink;
    reattend?: LinksImportationReattendColumnLink;
    unmap?: LinksImportationUnmapCatalogColumnLink;
}
