package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserListOfValuesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Language")
    public String[] acceptLanguage;
    public GetUserListOfValuesHeaders withAcceptLanguage(String[] acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-None-Match")
    public String ifNoneMatch;
    public GetUserListOfValuesHeaders withIfNoneMatch(String ifNoneMatch) {
        this.ifNoneMatch = ifNoneMatch;
        return this;
    }
}