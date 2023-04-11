import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type is used by each unique eBay marketplace and compliance type combination that is returned in the getListingViolationsSummary response to indicate the total number of listing violations in regards to that eBay marketplace and compliance type.
 */
export declare class ComplianceSummaryInfo extends SpeakeasyBase {
    /**
     * This enumeration value indicates the type of compliance. See ComplianceTypeEnum for more information on each compliance type. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/compliance/types/com:ComplianceTypeEnum'>eBay API documentation</a>
     */
    complianceType?: string;
    /**
     * This integer value indicates the number of eBay listings that are currently violating the compliance type indicated in the complianceType field, for the eBay marketplace indicated in the marketplaceId field.
     */
    listingCount?: number;
    /**
     * This enumeration value indicates the eBay marketplace where the listing violations exist. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/compliance/types/bas:MarketplaceIdEnum'>eBay API documentation</a>
     */
    marketplaceId?: string;
}
