package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImportJobsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page-size")
    public String pageSize;
    public GetImportJobsQueryParams withPageSize(String pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public GetImportJobsQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}