package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListMetricStreamsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListMetricStreamsActionEnum action;
    public GetListMetricStreamsQueryParams withAction(GetListMetricStreamsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;
    public GetListMetricStreamsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetListMetricStreamsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListMetricStreamsVersionEnum version;
    public GetListMetricStreamsQueryParams withVersion(GetListMetricStreamsVersionEnum version) {
        this.version = version;
        return this;
    }
}