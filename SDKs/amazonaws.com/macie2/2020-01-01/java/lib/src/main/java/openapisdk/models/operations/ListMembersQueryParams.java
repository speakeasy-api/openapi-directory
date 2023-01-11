package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMembersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListMembersQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListMembersQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=onlyAssociated")
    public String onlyAssociated;
    public ListMembersQueryParams withOnlyAssociated(String onlyAssociated) {
        this.onlyAssociated = onlyAssociated;
        return this;
    }
}