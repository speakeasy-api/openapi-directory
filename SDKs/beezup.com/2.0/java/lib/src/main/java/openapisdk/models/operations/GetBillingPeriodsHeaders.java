package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBillingPeriodsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-None-Match")
    public String ifNoneMatch;
    public GetBillingPeriodsHeaders withIfNoneMatch(String ifNoneMatch) {
        this.ifNoneMatch = ifNoneMatch;
        return this;
    }
}