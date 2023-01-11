package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSatellitesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListSatellitesQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListSatellitesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}