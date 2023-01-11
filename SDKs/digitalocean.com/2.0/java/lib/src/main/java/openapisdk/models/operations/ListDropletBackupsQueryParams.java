package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDropletBackupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ListDropletBackupsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ListDropletBackupsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}