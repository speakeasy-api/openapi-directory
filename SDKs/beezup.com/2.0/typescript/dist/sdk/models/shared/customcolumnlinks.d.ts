import { SpeakeasyBase } from "../../../internal/utils";
import { LinksCatalogChangeCustomColumnExpressionLink } from "./linkscatalogchangecustomcolumnexpressionlink";
import { LinksCatalogChangeCustomColumnUserNameLink } from "./linkscatalogchangecustomcolumnusernamelink";
import { LinksCatalogDeleteCustomColumnLink } from "./linkscatalogdeletecustomcolumnlink";
import { LinksCatalogGetCustomColumnExpressionLink } from "./linkscataloggetcustomcolumnexpressionlink";
import { LinksCatalogSaveCustomColumnLink } from "./linkscatalogsavecustomcolumnlink";
export declare class CustomColumnLinks extends SpeakeasyBase {
    delete: LinksCatalogDeleteCustomColumnLink;
    expression: LinksCatalogGetCustomColumnExpressionLink;
    rename: LinksCatalogChangeCustomColumnUserNameLink;
    save: LinksCatalogSaveCustomColumnLink;
    saveExpression: LinksCatalogChangeCustomColumnExpressionLink;
}
