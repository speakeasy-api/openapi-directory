package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV4LayersAsPlantedHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public GetV4LayersAsPlantedHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Limit")
    public Integer xLimit;
    public GetV4LayersAsPlantedHeaders withXLimit(Integer xLimit) {
        this.xLimit = xLimit;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Next-Token")
    public String xNextToken;
    public GetV4LayersAsPlantedHeaders withXNextToken(String xNextToken) {
        this.xNextToken = xNextToken;
        return this;
    }
}