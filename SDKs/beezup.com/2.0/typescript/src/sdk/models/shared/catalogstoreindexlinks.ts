import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksAutoGetAutoImportConfigurationLink } from "./linksautogetautoimportconfigurationlink";
import { LinksCatalogGetCatalogColumnsLink } from "./linkscataloggetcatalogcolumnslink";
import { LinksCatalogGetCategoriesLink } from "./linkscataloggetcategorieslink";
import { LinksCatalogComputeExpressionLink } from "./linkscatalogcomputeexpressionlink";
import { LinksCatalogGetCustomColumnsLink } from "./linkscataloggetcustomcolumnslink";
import { LinksImportationGetReportingsLink } from "./linksimportationgetreportingslink";
import { LinksImportationGetManualUpdateLastInputConfigLink } from "./linksimportationgetmanualupdatelastinputconfiglink";
import { LinksCatalogGetProductsLink } from "./linkscataloggetproductslink";
import { LinksCatalogGetRandomProductsLink } from "./linkscataloggetrandomproductslink";
import { LinksCatalogStoreIndexLink } from "./linkscatalogstoreindexlink";
import { LinksImportationStartManualUpdateLink } from "./linksimportationstartmanualupdatelink";



export class CatalogStoreIndexLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoImportInfo" })
  autoImportInfo?: LinksAutoGetAutoImportConfigurationLink;

  @SpeakeasyMetadata({ data: "json, name=catalogColumns" })
  catalogColumns?: LinksCatalogGetCatalogColumnsLink;

  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories?: LinksCatalogGetCategoriesLink;

  @SpeakeasyMetadata({ data: "json, name=computeExpression" })
  computeExpression?: LinksCatalogComputeExpressionLink;

  @SpeakeasyMetadata({ data: "json, name=customColumns" })
  customColumns?: LinksCatalogGetCustomColumnsLink;

  @SpeakeasyMetadata({ data: "json, name=importations" })
  importations?: LinksImportationGetReportingsLink;

  @SpeakeasyMetadata({ data: "json, name=inputConfiguration" })
  inputConfiguration?: LinksImportationGetManualUpdateLastInputConfigLink;

  @SpeakeasyMetadata({ data: "json, name=products" })
  products?: LinksCatalogGetProductsLink;

  @SpeakeasyMetadata({ data: "json, name=randomProducts" })
  randomProducts?: LinksCatalogGetRandomProductsLink;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksCatalogStoreIndexLink;

  @SpeakeasyMetadata({ data: "json, name=startImportation" })
  startImportation?: LinksImportationStartManualUpdateLink;
}
