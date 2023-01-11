package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListArtifactsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListArtifactsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}