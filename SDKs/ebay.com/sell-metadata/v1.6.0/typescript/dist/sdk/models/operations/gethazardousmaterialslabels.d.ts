import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetHazardousMaterialsLabelsSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetHazardousMaterialsLabelsRequest extends SpeakeasyBase {
    /**
     * A path parameter that specifies the eBay marketplace for which hazardous materials label information shall be retrieved.<p><span class="tablenote"><strong>Tip:</strong> See <a href="/api-docs/static/rest-request-components.html#marketpl" >Request components</a> for a list of valid eBay marketplace IDs.</span></p>
     */
    marketplaceId: string;
}
export declare class GetHazardousMaterialsLabelsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    hazardousMaterialDetailsResponse?: shared.HazardousMaterialDetailsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
