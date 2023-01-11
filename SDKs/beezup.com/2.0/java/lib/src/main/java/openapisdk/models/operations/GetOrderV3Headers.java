package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrderV3Headers {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-None-Match")
    public String ifNoneMatch;
    public GetOrderV3Headers withIfNoneMatch(String ifNoneMatch) {
        this.ifNoneMatch = ifNoneMatch;
        return this;
    }
}