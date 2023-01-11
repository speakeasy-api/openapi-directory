package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProvisionedProductOutputsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public String pageSize;
    public GetProvisionedProductOutputsQueryParams withPageSize(String pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageToken")
    public String pageToken;
    public GetProvisionedProductOutputsQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
}