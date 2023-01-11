package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListOutpostsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AvailabilityZoneFilter")
    public String[] availabilityZoneFilter;
    public ListOutpostsQueryParams withAvailabilityZoneFilter(String[] availabilityZoneFilter) {
        this.availabilityZoneFilter = availabilityZoneFilter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AvailabilityZoneIdFilter")
    public String[] availabilityZoneIdFilter;
    public ListOutpostsQueryParams withAvailabilityZoneIdFilter(String[] availabilityZoneIdFilter) {
        this.availabilityZoneIdFilter = availabilityZoneIdFilter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LifeCycleStatusFilter")
    public String[] lifeCycleStatusFilter;
    public ListOutpostsQueryParams withLifeCycleStatusFilter(String[] lifeCycleStatusFilter) {
        this.lifeCycleStatusFilter = lifeCycleStatusFilter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;
    public ListOutpostsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListOutpostsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}