package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Encoding")
    public String[] acceptEncoding;
    public GetChannelsHeaders withAcceptEncoding(String[] acceptEncoding) {
        this.acceptEncoding = acceptEncoding;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-None-Match")
    public String ifNoneMatch;
    public GetChannelsHeaders withIfNoneMatch(String ifNoneMatch) {
        this.ifNoneMatch = ifNoneMatch;
        return this;
    }
}