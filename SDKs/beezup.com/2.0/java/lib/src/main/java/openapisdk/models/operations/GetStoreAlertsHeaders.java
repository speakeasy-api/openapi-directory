package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStoreAlertsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-None-Match")
    public String ifNoneMatch;
    public GetStoreAlertsHeaders withIfNoneMatch(String ifNoneMatch) {
        this.ifNoneMatch = ifNoneMatch;
        return this;
    }
}