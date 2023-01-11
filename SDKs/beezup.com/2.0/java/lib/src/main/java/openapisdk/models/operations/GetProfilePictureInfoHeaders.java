package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProfilePictureInfoHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-None-Match")
    public String ifNoneMatch;
    public GetProfilePictureInfoHeaders withIfNoneMatch(String ifNoneMatch) {
        this.ifNoneMatch = ifNoneMatch;
        return this;
    }
}