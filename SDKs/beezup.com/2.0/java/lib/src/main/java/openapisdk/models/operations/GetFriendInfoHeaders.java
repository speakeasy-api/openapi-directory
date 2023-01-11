package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFriendInfoHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-None-Match")
    public String ifNoneMatch;
    public GetFriendInfoHeaders withIfNoneMatch(String ifNoneMatch) {
        this.ifNoneMatch = ifNoneMatch;
        return this;
    }
}