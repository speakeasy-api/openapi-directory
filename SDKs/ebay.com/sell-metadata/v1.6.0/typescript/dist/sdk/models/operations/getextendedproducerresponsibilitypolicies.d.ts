import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetExtendedProducerResponsibilityPoliciesSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetExtendedProducerResponsibilityPoliciesRequest extends SpeakeasyBase {
    /**
     * A query parameter that can be used to limit the response by returning policy information for only the selected sections of the category tree. Supply <b>categoryId</b> values for the sections of the tree that should be returned.<br /><br />When a <b>categoryId</b> value is specified, the returned category tree includes the policies for that parent node, as well as the policies for any child nodes below that parent node.<br /><br />Pass in the <b>categoryId</b> values using a URL-encoded, pipe-separated ('|') list. For example:<br /><br /><code>filter=categoryIds%3A%7B100%7C101%7C102%7D</code><br /><br /><b>Maximum:</b> 50
     */
    filter?: string;
    /**
     * A path parameter that specifies the eBay marketplace for which policy information shall be retrieved.<br /><br /><span class="tablenote"><span style="color:#478415"><strong>Tip:</strong></span> See <a href="/api-docs/static/rest-request-components.html#marketpl" target="_blank">Request components</a> for a list of valid eBay marketplace IDs.</span>
     */
    marketplaceId: string;
}
export declare class GetExtendedProducerResponsibilityPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    extendedProducerResponsibilityPolicyResponse?: shared.ExtendedProducerResponsibilityPolicyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
