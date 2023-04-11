import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonHttpMethodEnum } from "./beezupcommonhttpmethodenum";
import { BeezUPCommonInfoSummaries } from "./beezupcommoninfosummaries";
import { BeezUPCommonLinkParameter3 } from "./beezupcommonlinkparameter3";
export declare class LinksGetTrackingStatusLink extends SpeakeasyBase {
    /**
     * indicates whether all optionals params have been provided
     */
    allOptionalParamsProvided?: boolean;
    /**
     * indicates whether all required params have been provided
     */
    allRequiredParamsProvided?: boolean;
    /**
     * The description of the link
     */
    description?: string;
    /**
     * The documentation related to this operation.
     */
    docUrl?: string;
    /**
     * Indicate the relative uri for this link
     */
    href: string;
    info?: BeezUPCommonInfoSummaries;
    /**
     * The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
     */
    label?: string;
    /**
     * Indicate the http method to use on this link
     */
    method?: BeezUPCommonHttpMethodEnum;
    /**
     * The operationId to call.
     */
    operationId?: string;
    parameters?: Record<string, BeezUPCommonLinkParameter3>;
    /**
     * indicates whether the href is templated or not
     */
    urlTemplated?: boolean;
}
