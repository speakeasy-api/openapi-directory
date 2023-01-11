package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTestGridSessionArtifactsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResult")
    public String maxResult;
    public ListTestGridSessionArtifactsQueryParams withMaxResult(String maxResult) {
        this.maxResult = maxResult;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListTestGridSessionArtifactsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}