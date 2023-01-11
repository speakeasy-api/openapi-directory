package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3DownloadsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Language")
    public String acceptLanguage;
    public GetV3DownloadsHeaders withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
}