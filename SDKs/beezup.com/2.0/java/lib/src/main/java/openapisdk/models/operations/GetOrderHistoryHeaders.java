package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrderHistoryHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-None-Match")
    public String ifNoneMatch;
    public GetOrderHistoryHeaders withIfNoneMatch(String ifNoneMatch) {
        this.ifNoneMatch = ifNoneMatch;
        return this;
    }
}