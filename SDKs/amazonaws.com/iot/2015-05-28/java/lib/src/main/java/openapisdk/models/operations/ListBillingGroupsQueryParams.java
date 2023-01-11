package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBillingGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListBillingGroupsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=namePrefixFilter")
    public String namePrefixFilter;
    public ListBillingGroupsQueryParams withNamePrefixFilter(String namePrefixFilter) {
        this.namePrefixFilter = namePrefixFilter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListBillingGroupsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}