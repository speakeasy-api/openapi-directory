package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateItemDraftHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Content-Language")
    public String contentLanguage;
    public CreateItemDraftHeaders withContentLanguage(String contentLanguage) {
        this.contentLanguage = contentLanguage;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-EBAY-C-MARKETPLACE-ID")
    public String xEBAYCMARKETPLACEID;
    public CreateItemDraftHeaders withXEbayCMarketplaceId(String xEBAYCMARKETPLACEID) {
        this.xEBAYCMARKETPLACEID = xEBAYCMARKETPLACEID;
        return this;
    }
}