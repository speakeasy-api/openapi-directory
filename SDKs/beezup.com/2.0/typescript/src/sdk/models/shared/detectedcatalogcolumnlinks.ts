import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksImportationConfigureCatalogColumnLink } from "./linksimportationconfigurecatalogcolumnlink";
import { LinksImportationIgnoreColumnLink } from "./linksimportationignorecolumnlink";
import { LinksImportationMapCatalogColumnLink } from "./linksimportationmapcatalogcolumnlink";
import { LinksImportationReattendColumnLink } from "./linksimportationreattendcolumnlink";
import { LinksImportationUnmapCatalogColumnLink } from "./linksimportationunmapcatalogcolumnlink";



export class DetectedCatalogColumnLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configure" })
  configure?: LinksImportationConfigureCatalogColumnLink;

  @SpeakeasyMetadata({ data: "json, name=ignore" })
  ignore?: LinksImportationIgnoreColumnLink;

  @SpeakeasyMetadata({ data: "json, name=map" })
  map?: LinksImportationMapCatalogColumnLink;

  @SpeakeasyMetadata({ data: "json, name=reattend" })
  reattend?: LinksImportationReattendColumnLink;

  @SpeakeasyMetadata({ data: "json, name=unmap" })
  unmap?: LinksImportationUnmapCatalogColumnLink;
}
