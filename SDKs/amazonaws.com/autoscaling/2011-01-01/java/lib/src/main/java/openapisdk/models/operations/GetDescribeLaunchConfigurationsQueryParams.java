package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeLaunchConfigurationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeLaunchConfigurationsActionEnum action;
    public GetDescribeLaunchConfigurationsQueryParams withAction(GetDescribeLaunchConfigurationsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LaunchConfigurationNames")
    public String[] launchConfigurationNames;
    public GetDescribeLaunchConfigurationsQueryParams withLaunchConfigurationNames(String[] launchConfigurationNames) {
        this.launchConfigurationNames = launchConfigurationNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeLaunchConfigurationsQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetDescribeLaunchConfigurationsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeLaunchConfigurationsVersionEnum version;
    public GetDescribeLaunchConfigurationsQueryParams withVersion(GetDescribeLaunchConfigurationsVersionEnum version) {
        this.version = version;
        return this;
    }
}