import { SpeakeasyBase } from "../../../internal/utils";
import { LinksAutoGetAutoImportConfigurationLink } from "./linksautogetautoimportconfigurationlink";
import { LinksCatalogComputeExpressionLink } from "./linkscatalogcomputeexpressionlink";
import { LinksCatalogGetCatalogColumnsLink } from "./linkscataloggetcatalogcolumnslink";
import { LinksCatalogGetCategoriesLink } from "./linkscataloggetcategorieslink";
import { LinksCatalogGetCustomColumnsLink } from "./linkscataloggetcustomcolumnslink";
import { LinksCatalogGetProductsLink } from "./linkscataloggetproductslink";
import { LinksCatalogGetRandomProductsLink } from "./linkscataloggetrandomproductslink";
import { LinksCatalogStoreIndexLink } from "./linkscatalogstoreindexlink";
import { LinksImportationGetManualUpdateLastInputConfigLink } from "./linksimportationgetmanualupdatelastinputconfiglink";
import { LinksImportationGetReportingsLink } from "./linksimportationgetreportingslink";
import { LinksImportationStartManualUpdateLink } from "./linksimportationstartmanualupdatelink";
export declare class CatalogStoreIndexLinks extends SpeakeasyBase {
    autoImportInfo?: LinksAutoGetAutoImportConfigurationLink;
    catalogColumns?: LinksCatalogGetCatalogColumnsLink;
    categories?: LinksCatalogGetCategoriesLink;
    computeExpression?: LinksCatalogComputeExpressionLink;
    customColumns?: LinksCatalogGetCustomColumnsLink;
    importations?: LinksImportationGetReportingsLink;
    inputConfiguration?: LinksImportationGetManualUpdateLastInputConfigLink;
    products?: LinksCatalogGetProductsLink;
    randomProducts?: LinksCatalogGetRandomProductsLink;
    self: LinksCatalogStoreIndexLink;
    startImportation?: LinksImportationStartManualUpdateLink;
}
