package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV4LayersAsHarvestedHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public GetV4LayersAsHarvestedHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Limit")
    public Integer xLimit;
    public GetV4LayersAsHarvestedHeaders withXLimit(Integer xLimit) {
        this.xLimit = xLimit;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Next-Token")
    public String xNextToken;
    public GetV4LayersAsHarvestedHeaders withXNextToken(String xNextToken) {
        this.xNextToken = xNextToken;
        return this;
    }
}