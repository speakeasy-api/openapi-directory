import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonInfoSummaries } from "./beezupcommoninfosummaries";
import { BeezUpCommonHttpMethodEnum } from "./beezupcommonhttpmethodenum";
import { BeezUpCommonLinkParameter3 } from "./beezupcommonlinkparameter3";
export declare class LinksCatalogGetBeezUpColumnsLink extends SpeakeasyBase {
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
