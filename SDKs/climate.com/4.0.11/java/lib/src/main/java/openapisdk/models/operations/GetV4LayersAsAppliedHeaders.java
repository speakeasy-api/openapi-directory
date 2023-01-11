package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV4LayersAsAppliedHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public GetV4LayersAsAppliedHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Limit")
    public Integer xLimit;
    public GetV4LayersAsAppliedHeaders withXLimit(Integer xLimit) {
        this.xLimit = xLimit;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Next-Token")
    public String xNextToken;
    public GetV4LayersAsAppliedHeaders withXNextToken(String xNextToken) {
        this.xNextToken = xNextToken;
        return this;
    }
}