import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAdvertisingEligibilitySecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetAdvertisingEligibilityRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the eBay marketplace for which the seller eligibility status shall be checked.<br /><br /><span class="tablenote"><b>Note:</b> This value is case-sensitive.</span>
     */
    xEbayCMarketplaceId: string;
    /**
     * A comma-separated list of eBay advertising programs.<br /><br /><span class="tablenote"><b>Tip:</b> See the <a href="/api-docs/sell/account/types/plser:AdvertisingProgramEnum"> AdvertisingProgramEnum</a> type for possible values.</span><br /><br />If no programs are specified, the results will be returned for all programs.
     */
    programTypes?: string;
}
export declare class GetAdvertisingEligibilityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    sellerEligibilityMultiProgramResponse?: shared.SellerEligibilityMultiProgramResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
