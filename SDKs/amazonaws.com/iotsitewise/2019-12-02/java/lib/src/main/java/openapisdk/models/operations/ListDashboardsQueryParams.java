package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDashboardsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListDashboardsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListDashboardsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=projectId")
    public String projectId;
    public ListDashboardsQueryParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}