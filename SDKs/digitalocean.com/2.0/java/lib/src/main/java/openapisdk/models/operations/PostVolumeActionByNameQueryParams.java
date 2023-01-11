package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostVolumeActionByNameQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public PostVolumeActionByNameQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public PostVolumeActionByNameQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}