package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreditCardInfoHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-None-Match")
    public String ifNoneMatch;
    public GetCreditCardInfoHeaders withIfNoneMatch(String ifNoneMatch) {
        this.ifNoneMatch = ifNoneMatch;
        return this;
    }
}