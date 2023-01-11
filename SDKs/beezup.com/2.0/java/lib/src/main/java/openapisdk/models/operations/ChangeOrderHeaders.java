package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeOrderHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Match")
    public String ifMatch;
    public ChangeOrderHeaders withIfMatch(String ifMatch) {
        this.ifMatch = ifMatch;
        return this;
    }
}