package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public OrgsListQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public Long since;
    public OrgsListQueryParams withSince(Long since) {
        this.since = since;
        return this;
    }
}