package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListOtaUpdatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListOtaUpdatesQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListOtaUpdatesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=otaUpdateStatus")
    public ListOtaUpdatesOtaUpdateStatusEnum otaUpdateStatus;
    public ListOtaUpdatesQueryParams withOtaUpdateStatus(ListOtaUpdatesOtaUpdateStatusEnum otaUpdateStatus) {
        this.otaUpdateStatus = otaUpdateStatus;
        return this;
    }
}