package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSitemapsSamplesOutOfConfigQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetSitemapsSamplesOutOfConfigQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public Long size;
    public GetSitemapsSamplesOutOfConfigQueryParams withSize(Long size) {
        this.size = size;
        return this;
    }
}