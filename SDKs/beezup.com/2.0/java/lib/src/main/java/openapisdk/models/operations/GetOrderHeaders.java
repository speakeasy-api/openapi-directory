package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrderHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-None-Match")
    public String ifNoneMatch;
    public GetOrderHeaders withIfNoneMatch(String ifNoneMatch) {
        this.ifNoneMatch = ifNoneMatch;
        return this;
    }
}