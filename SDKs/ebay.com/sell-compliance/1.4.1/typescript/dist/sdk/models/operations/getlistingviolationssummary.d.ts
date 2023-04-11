import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetListingViolationsSummarySecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetListingViolationsSummaryRequest extends SpeakeasyBase {
    /**
     * Use this header to specify the eBay marketplace identifier. Supported values for this header can be found in the MarketplaceIdEnum type definition. Note that Version 1.4.0 of the Compliance API is only supported on the US, UK, Australia, Canada {English), and Germany sites.
     */
    xEbayCMarketplaceId?: string;
    /**
     * A user passes in one or more compliance type values through this query parameter. See ComplianceTypeEnum for more information on the supported compliance types that can be passed in here. If more than one compliance type value is used, delimit these values with a comma. If no compliance type values are passed in, the listing count for all compliance types will be returned. Note: Only a canned response, with counts for all listing compliance types, is returned in the Sandbox environment. Due to this limitation, the compliance_type query parameter (if used) will not have an effect on the response.
     */
    complianceType?: string;
}
export declare class GetListingViolationsSummaryResponse extends SpeakeasyBase {
    /**
     * Success
     */
    complianceSummary?: shared.ComplianceSummary;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
