package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetMetricDataQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetMetricDataActionEnum action;
    public PostGetMetricDataQueryParams withAction(PostGetMetricDataActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxDatapoints")
    public String maxDatapoints;
    public PostGetMetricDataQueryParams withMaxDatapoints(String maxDatapoints) {
        this.maxDatapoints = maxDatapoints;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostGetMetricDataQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetMetricDataVersionEnum version;
    public PostGetMetricDataQueryParams withVersion(PostGetMetricDataVersionEnum version) {
        this.version = version;
        return this;
    }
}