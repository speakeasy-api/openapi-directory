package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUrlsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=area")
    public GetUrlsAreaEnum area;
    public GetUrlsQueryParams withArea(GetUrlsAreaEnum area) {
        this.area = area;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetUrlsQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public Integer size;
    public GetUrlsQueryParams withSize(Integer size) {
        this.size = size;
        return this;
    }
}