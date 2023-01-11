package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSecurityProfilesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dimensionName")
    public String dimensionName;
    public ListSecurityProfilesQueryParams withDimensionName(String dimensionName) {
        this.dimensionName = dimensionName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListSecurityProfilesQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=metricName")
    public String metricName;
    public ListSecurityProfilesQueryParams withMetricName(String metricName) {
        this.metricName = metricName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListSecurityProfilesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}