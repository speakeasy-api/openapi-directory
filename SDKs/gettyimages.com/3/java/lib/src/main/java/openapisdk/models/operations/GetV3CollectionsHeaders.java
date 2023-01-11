package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3CollectionsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Language")
    public String acceptLanguage;
    public GetV3CollectionsHeaders withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
}