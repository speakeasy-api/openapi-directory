import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonInfoSummaries } from "./beezupcommoninfosummaries";
import { BeezUpCommonHttpMethodEnum } from "./beezupcommonhttpmethodenum";
import { BeezUpCommonLinkParameter3 } from "./beezupcommonlinkparameter3";
/**
 * If you did not configure the cost settings this link will not be displayed.
**/
export declare class LinksGetChannelCatalogCategoriesLink extends SpeakeasyBase {
    allOptionalParamsProvided?: boolean;
    allRequiredParamsProvided?: boolean;
    description?: string;
    docUrl?: string;
    href: string;
    info?: BeezUpCommonInfoSummaries;
    label?: string;
    method?: BeezUpCommonHttpMethodEnum;
    operationId?: string;
    parameters?: Record<string, BeezUpCommonLinkParameter3>;
    urlTemplated?: boolean;
}
