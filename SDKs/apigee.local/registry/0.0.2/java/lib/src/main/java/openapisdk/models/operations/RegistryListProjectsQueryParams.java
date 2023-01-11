package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryListProjectsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public RegistryListProjectsQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public String pageSize;
    public RegistryListProjectsQueryParams withPageSize(String pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_token")
    public String pageToken;
    public RegistryListProjectsQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
}