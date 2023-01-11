package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStandardOffersHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-None-Match")
    public String ifNoneMatch;
    public GetStandardOffersHeaders withIfNoneMatch(String ifNoneMatch) {
        this.ifNoneMatch = ifNoneMatch;
        return this;
    }
}