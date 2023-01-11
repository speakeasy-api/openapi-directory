package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingViolationsSummaryHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-EBAY-C-MARKETPLACE-ID")
    public String xEBAYCMARKETPLACEID;
    public GetListingViolationsSummaryHeaders withXEbayCMarketplaceId(String xEBAYCMARKETPLACEID) {
        this.xEBAYCMARKETPLACEID = xEBAYCMARKETPLACEID;
        return this;
    }
}