package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserProjectsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetUserProjectsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public Long size;
    public GetUserProjectsQueryParams withSize(Long size) {
        this.size = size;
        return this;
    }
}