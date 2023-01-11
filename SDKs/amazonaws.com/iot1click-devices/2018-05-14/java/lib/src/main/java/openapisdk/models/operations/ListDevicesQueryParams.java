package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDevicesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deviceType")
    public String deviceType;
    public ListDevicesQueryParams withDeviceType(String deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListDevicesQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListDevicesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}