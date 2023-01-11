package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMarketplaceAccountsSynchronizationV3Headers {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-None-Match")
    public String ifNoneMatch;
    public GetMarketplaceAccountsSynchronizationV3Headers withIfNoneMatch(String ifNoneMatch) {
        this.ifNoneMatch = ifNoneMatch;
        return this;
    }
}