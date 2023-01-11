package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListLaunchProfilesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListLaunchProfilesQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListLaunchProfilesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=principalId")
    public String principalId;
    public ListLaunchProfilesQueryParams withPrincipalId(String principalId) {
        this.principalId = principalId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=states")
    public String[] states;
    public ListLaunchProfilesQueryParams withStates(String[] states) {
        this.states = states;
        return this;
    }
}