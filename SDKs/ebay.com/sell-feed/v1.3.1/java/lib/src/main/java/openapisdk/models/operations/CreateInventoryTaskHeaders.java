package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInventoryTaskHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-EBAY-C-MARKETPLACE-ID")
    public String xEBAYCMARKETPLACEID;
    public CreateInventoryTaskHeaders withXEbayCMarketplaceId(String xEBAYCMARKETPLACEID) {
        this.xEBAYCMARKETPLACEID = xEBAYCMARKETPLACEID;
        return this;
    }
}