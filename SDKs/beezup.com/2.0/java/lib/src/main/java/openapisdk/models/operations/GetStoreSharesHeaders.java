package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStoreSharesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-None-Match")
    public String ifNoneMatch;
    public GetStoreSharesHeaders withIfNoneMatch(String ifNoneMatch) {
        this.ifNoneMatch = ifNoneMatch;
        return this;
    }
}