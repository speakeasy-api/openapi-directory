package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrderExportationsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-None-Match")
    public String ifNoneMatch;
    public GetOrderExportationsHeaders withIfNoneMatch(String ifNoneMatch) {
        this.ifNoneMatch = ifNoneMatch;
        return this;
    }
}