package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAssetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=assetModelId")
    public String assetModelId;
    public ListAssetsQueryParams withAssetModelId(String assetModelId) {
        this.assetModelId = assetModelId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public ListAssetsFilterEnum filter;
    public ListAssetsQueryParams withFilter(ListAssetsFilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListAssetsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListAssetsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}