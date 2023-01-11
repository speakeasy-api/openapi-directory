package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMarketplaceAccountsSynchronizationHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-None-Match")
    public String ifNoneMatch;
    public GetMarketplaceAccountsSynchronizationHeaders withIfNoneMatch(String ifNoneMatch) {
        this.ifNoneMatch = ifNoneMatch;
        return this;
    }
}