package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDetectorsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListDetectorsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListDetectorsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=stateName")
    public String stateName;
    public ListDetectorsQueryParams withStateName(String stateName) {
        this.stateName = stateName;
        return this;
    }
}