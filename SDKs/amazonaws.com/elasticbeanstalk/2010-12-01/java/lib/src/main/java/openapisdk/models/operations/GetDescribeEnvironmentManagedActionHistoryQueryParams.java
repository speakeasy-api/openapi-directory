package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeEnvironmentManagedActionHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeEnvironmentManagedActionHistoryActionEnum action;
    public GetDescribeEnvironmentManagedActionHistoryQueryParams withAction(GetDescribeEnvironmentManagedActionHistoryActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EnvironmentId")
    public String environmentId;
    public GetDescribeEnvironmentManagedActionHistoryQueryParams withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EnvironmentName")
    public String environmentName;
    public GetDescribeEnvironmentManagedActionHistoryQueryParams withEnvironmentName(String environmentName) {
        this.environmentName = environmentName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetDescribeEnvironmentManagedActionHistoryQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetDescribeEnvironmentManagedActionHistoryQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeEnvironmentManagedActionHistoryVersionEnum version;
    public GetDescribeEnvironmentManagedActionHistoryQueryParams withVersion(GetDescribeEnvironmentManagedActionHistoryVersionEnum version) {
        this.version = version;
        return this;
    }
}