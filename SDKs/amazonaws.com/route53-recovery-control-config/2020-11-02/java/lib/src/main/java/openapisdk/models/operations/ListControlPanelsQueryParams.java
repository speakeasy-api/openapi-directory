package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListControlPanelsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterArn")
    public String clusterArn;
    public ListControlPanelsQueryParams withClusterArn(String clusterArn) {
        this.clusterArn = clusterArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;
    public ListControlPanelsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListControlPanelsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}