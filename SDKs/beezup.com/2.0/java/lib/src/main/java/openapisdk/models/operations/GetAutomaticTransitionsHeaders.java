package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAutomaticTransitionsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-None-Match")
    public String ifNoneMatch;
    public GetAutomaticTransitionsHeaders withIfNoneMatch(String ifNoneMatch) {
        this.ifNoneMatch = ifNoneMatch;
        return this;
    }
}