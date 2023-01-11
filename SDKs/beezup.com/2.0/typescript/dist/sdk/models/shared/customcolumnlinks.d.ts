import { SpeakeasyBase } from "../../../internal/utils";
import { LinksCatalogDeleteCustomColumnLink } from "./linkscatalogdeletecustomcolumnlink";
import { LinksCatalogGetCustomColumnExpressionLink } from "./linkscataloggetcustomcolumnexpressionlink";
import { LinksCatalogChangeCustomColumnUserNameLink } from "./linkscatalogchangecustomcolumnusernamelink";
import { LinksCatalogSaveCustomColumnLink } from "./linkscatalogsavecustomcolumnlink";
import { LinksCatalogChangeCustomColumnExpressionLink } from "./linkscatalogchangecustomcolumnexpressionlink";
export declare class CustomColumnLinks extends SpeakeasyBase {
    delete: LinksCatalogDeleteCustomColumnLink;
    expression: LinksCatalogGetCustomColumnExpressionLink;
    rename: LinksCatalogChangeCustomColumnUserNameLink;
    save: LinksCatalogSaveCustomColumnLink;
    saveExpression: LinksCatalogChangeCustomColumnExpressionLink;
}
