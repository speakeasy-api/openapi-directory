import { SpeakeasyBase } from "../../../internal/utils";
import { InfoSummaries } from "./infosummaries";
import { HttpMethodEnum } from "./httpmethodenum";
import { LinkParameter3 } from "./linkparameter3";
export declare class Link3 extends SpeakeasyBase {
    allOptionalParamsProvided?: boolean;
    allRequiredParamsProvided?: boolean;
    description?: string;
    docUrl?: string;
    href: string;
    info?: InfoSummaries;
    label?: string;
    method?: HttpMethodEnum;
    operationId?: string;
    parameters?: Record<string, LinkParameter3>;
    rel?: string;
    urlTemplated?: boolean;
}
