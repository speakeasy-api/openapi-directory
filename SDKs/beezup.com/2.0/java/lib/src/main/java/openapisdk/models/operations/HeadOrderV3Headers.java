package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HeadOrderV3Headers {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-None-Match")
    public String ifNoneMatch;
    public HeadOrderV3Headers withIfNoneMatch(String ifNoneMatch) {
        this.ifNoneMatch = ifNoneMatch;
        return this;
    }
}