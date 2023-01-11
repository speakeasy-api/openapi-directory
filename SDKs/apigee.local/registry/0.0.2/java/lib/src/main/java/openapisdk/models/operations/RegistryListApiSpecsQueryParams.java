package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryListApiSpecsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public RegistryListApiSpecsQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public String pageSize;
    public RegistryListApiSpecsQueryParams withPageSize(String pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_token")
    public String pageToken;
    public RegistryListApiSpecsQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
}