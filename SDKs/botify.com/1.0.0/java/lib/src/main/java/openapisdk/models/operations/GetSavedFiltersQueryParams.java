package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSavedFiltersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetSavedFiltersQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public Long size;
    public GetSavedFiltersQueryParams withSize(Long size) {
        this.size = size;
        return this;
    }
}