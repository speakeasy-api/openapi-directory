package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HeadOrderHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-None-Match")
    public String ifNoneMatch;
    public HeadOrderHeaders withIfNoneMatch(String ifNoneMatch) {
        this.ifNoneMatch = ifNoneMatch;
        return this;
    }
}