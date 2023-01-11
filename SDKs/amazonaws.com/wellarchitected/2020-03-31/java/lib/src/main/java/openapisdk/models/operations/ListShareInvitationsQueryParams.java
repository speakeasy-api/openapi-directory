package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListShareInvitationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;
    public ListShareInvitationsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListShareInvitationsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=WorkloadNamePrefix")
    public String workloadNamePrefix;
    public ListShareInvitationsQueryParams withWorkloadNamePrefix(String workloadNamePrefix) {
        this.workloadNamePrefix = workloadNamePrefix;
        return this;
    }
}