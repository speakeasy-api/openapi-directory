package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPublicListOfValuesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Language")
    public String[] acceptLanguage;
    public GetPublicListOfValuesHeaders withAcceptLanguage(String[] acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-None-Match")
    public String ifNoneMatch;
    public GetPublicListOfValuesHeaders withIfNoneMatch(String ifNoneMatch) {
        this.ifNoneMatch = ifNoneMatch;
        return this;
    }
}