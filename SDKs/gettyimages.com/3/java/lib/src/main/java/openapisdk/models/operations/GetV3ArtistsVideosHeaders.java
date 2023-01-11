package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3ArtistsVideosHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Language")
    public String acceptLanguage;
    public GetV3ArtistsVideosHeaders withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
}