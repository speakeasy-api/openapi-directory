package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListGroundStationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListGroundStationsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListGroundStationsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=satelliteId")
    public String satelliteId;
    public ListGroundStationsQueryParams withSatelliteId(String satelliteId) {
        this.satelliteId = satelliteId;
        return this;
    }
}