package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInvoicesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-None-Match")
    public String ifNoneMatch;
    public GetInvoicesHeaders withIfNoneMatch(String ifNoneMatch) {
        this.ifNoneMatch = ifNoneMatch;
        return this;
    }
}