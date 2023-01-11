package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV4LayersAsHarvestedActivityIdContentsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public GetV4LayersAsHarvestedActivityIdContentsHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Range")
    public String range;
    public GetV4LayersAsHarvestedActivityIdContentsHeaders withRange(String range) {
        this.range = range;
        return this;
    }
}