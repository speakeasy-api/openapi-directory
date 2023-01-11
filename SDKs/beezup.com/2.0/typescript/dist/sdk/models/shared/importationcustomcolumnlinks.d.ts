import { SpeakeasyBase } from "../../../internal/utils";
import { LinksCatalogDeleteCustomColumnLink } from "./linkscatalogdeletecustomcolumnlink";
import { LinksCatalogGetCustomColumnExpressionLink } from "./linkscataloggetcustomcolumnexpressionlink";
import { LinksImportationMapCustomColumnLink } from "./linksimportationmapcustomcolumnlink";
import { LinksImportationGetProductSampleCustomColumnValueLink } from "./linksimportationgetproductsamplecustomcolumnvaluelink";
import { LinksImportationSaveCustomColumnLink } from "./linksimportationsavecustomcolumnlink";
import { LinksImportationUnmapCustomColumnLink } from "./linksimportationunmapcustomcolumnlink";
export declare class ImportationCustomColumnLinks extends SpeakeasyBase {
    delete: LinksCatalogDeleteCustomColumnLink;
    expression: LinksCatalogGetCustomColumnExpressionLink;
    map?: LinksImportationMapCustomColumnLink;
    productSampleValue?: LinksImportationGetProductSampleCustomColumnValueLink;
    save: LinksImportationSaveCustomColumnLink;
    unmap?: LinksImportationUnmapCustomColumnLink;
}
