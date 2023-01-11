import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksCatalogDeleteCustomColumnLink } from "./linkscatalogdeletecustomcolumnlink";
import { LinksCatalogGetCustomColumnExpressionLink } from "./linkscataloggetcustomcolumnexpressionlink";
import { LinksImportationMapCustomColumnLink } from "./linksimportationmapcustomcolumnlink";
import { LinksImportationGetProductSampleCustomColumnValueLink } from "./linksimportationgetproductsamplecustomcolumnvaluelink";
import { LinksImportationSaveCustomColumnLink } from "./linksimportationsavecustomcolumnlink";
import { LinksImportationUnmapCustomColumnLink } from "./linksimportationunmapcustomcolumnlink";



export class ImportationCustomColumnLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete: LinksCatalogDeleteCustomColumnLink;

  @SpeakeasyMetadata({ data: "json, name=expression" })
  expression: LinksCatalogGetCustomColumnExpressionLink;

  @SpeakeasyMetadata({ data: "json, name=map" })
  map?: LinksImportationMapCustomColumnLink;

  @SpeakeasyMetadata({ data: "json, name=productSampleValue" })
  productSampleValue?: LinksImportationGetProductSampleCustomColumnValueLink;

  @SpeakeasyMetadata({ data: "json, name=save" })
  save: LinksImportationSaveCustomColumnLink;

  @SpeakeasyMetadata({ data: "json, name=unmap" })
  unmap?: LinksImportationUnmapCustomColumnLink;
}
