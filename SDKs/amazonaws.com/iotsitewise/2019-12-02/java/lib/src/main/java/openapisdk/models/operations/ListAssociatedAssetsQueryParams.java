package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAssociatedAssetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=hierarchyId")
    public String hierarchyId;
    public ListAssociatedAssetsQueryParams withHierarchyId(String hierarchyId) {
        this.hierarchyId = hierarchyId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListAssociatedAssetsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListAssociatedAssetsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=traversalDirection")
    public ListAssociatedAssetsTraversalDirectionEnum traversalDirection;
    public ListAssociatedAssetsQueryParams withTraversalDirection(ListAssociatedAssetsTraversalDirectionEnum traversalDirection) {
        this.traversalDirection = traversalDirection;
        return this;
    }
}