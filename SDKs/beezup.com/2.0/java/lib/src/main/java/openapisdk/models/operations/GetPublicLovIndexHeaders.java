package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPublicLovIndexHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-None-Match")
    public String ifNoneMatch;
    public GetPublicLovIndexHeaders withIfNoneMatch(String ifNoneMatch) {
        this.ifNoneMatch = ifNoneMatch;
        return this;
    }
}