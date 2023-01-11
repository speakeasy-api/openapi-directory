package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListClientDevicesAssociatedWithCoreDeviceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListClientDevicesAssociatedWithCoreDeviceQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListClientDevicesAssociatedWithCoreDeviceQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}