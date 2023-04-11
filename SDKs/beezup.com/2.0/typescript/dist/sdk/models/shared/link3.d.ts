import { SpeakeasyBase } from "../../../internal/utils";
import { HttpMethodEnum } from "./httpmethodenum";
import { InfoSummaries } from "./infosummaries";
import { LinkParameter3 } from "./linkparameter3";
export declare class Link3 extends SpeakeasyBase {
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
    info?: InfoSummaries;
    /**
     * The label corresponding to the link. This label is automatically translated based on the Accept-Language http header.
     */
    label?: string;
    /**
     * Indicate the http method to use on this link
     */
    method?: HttpMethodEnum;
    /**
     * The operationId to call.
     */
    operationId?: string;
    parameters?: Record<string, LinkParameter3>;
    /**
     * Indicate the relation name related to the link
     */
    rel?: string;
    /**
     * indicates whether the href is templated or not
     */
    urlTemplated?: boolean;
}
