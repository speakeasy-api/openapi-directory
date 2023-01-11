package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV4LayersAsAppliedActivityIdContentsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public GetV4LayersAsAppliedActivityIdContentsHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Range")
    public String range;
    public GetV4LayersAsAppliedActivityIdContentsHeaders withRange(String range) {
        this.range = range;
        return this;
    }
}