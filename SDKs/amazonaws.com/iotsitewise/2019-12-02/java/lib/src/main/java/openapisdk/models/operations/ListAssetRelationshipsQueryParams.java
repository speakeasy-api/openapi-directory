package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAssetRelationshipsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListAssetRelationshipsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListAssetRelationshipsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=traversalType")
    public ListAssetRelationshipsTraversalTypeEnum traversalType;
    public ListAssetRelationshipsQueryParams withTraversalType(ListAssetRelationshipsTraversalTypeEnum traversalType) {
        this.traversalType = traversalType;
        return this;
    }
}