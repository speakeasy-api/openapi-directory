package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCharityOrgByLegacyIdHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-EBAY-C-MARKETPLACE-ID")
    public String xEBAYCMARKETPLACEID;
    public GetCharityOrgByLegacyIdHeaders withXEbayCMarketplaceId(String xEBAYCMARKETPLACEID) {
        this.xEBAYCMARKETPLACEID = xEBAYCMARKETPLACEID;
        return this;
    }
}