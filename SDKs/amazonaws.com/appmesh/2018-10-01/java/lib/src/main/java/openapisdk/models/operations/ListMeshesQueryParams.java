package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMeshesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ListMeshesQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListMeshesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}