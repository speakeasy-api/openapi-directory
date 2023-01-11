package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUrlsExportsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetUrlsExportsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public Long size;
    public GetUrlsExportsQueryParams withSize(Long size) {
        this.size = size;
        return this;
    }
}