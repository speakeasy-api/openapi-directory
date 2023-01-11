package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrderIndexHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-None-Match")
    public String ifNoneMatch;
    public GetOrderIndexHeaders withIfNoneMatch(String ifNoneMatch) {
        this.ifNoneMatch = ifNoneMatch;
        return this;
    }
}