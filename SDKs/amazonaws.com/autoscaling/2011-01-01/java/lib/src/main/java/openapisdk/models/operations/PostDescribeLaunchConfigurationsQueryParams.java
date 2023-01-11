package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeLaunchConfigurationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeLaunchConfigurationsActionEnum action;
    public PostDescribeLaunchConfigurationsQueryParams withAction(PostDescribeLaunchConfigurationsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeLaunchConfigurationsQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeLaunchConfigurationsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeLaunchConfigurationsVersionEnum version;
    public PostDescribeLaunchConfigurationsQueryParams withVersion(PostDescribeLaunchConfigurationsVersionEnum version) {
        this.version = version;
        return this;
    }
}