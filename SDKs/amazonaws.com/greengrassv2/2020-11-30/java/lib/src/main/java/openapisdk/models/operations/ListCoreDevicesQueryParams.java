package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCoreDevicesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListCoreDevicesQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListCoreDevicesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public ListCoreDevicesStatusEnum status;
    public ListCoreDevicesQueryParams withStatus(ListCoreDevicesStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=thingGroupArn")
    public String thingGroupArn;
    public ListCoreDevicesQueryParams withThingGroupArn(String thingGroupArn) {
        this.thingGroupArn = thingGroupArn;
        return this;
    }
}