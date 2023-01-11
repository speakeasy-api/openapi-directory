package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMembersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;
    public ListMembersQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListMembersQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=OnlyAssociated")
    public Boolean onlyAssociated;
    public ListMembersQueryParams withOnlyAssociated(Boolean onlyAssociated) {
        this.onlyAssociated = onlyAssociated;
        return this;
    }
}