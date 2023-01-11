package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3ImagesIdSameSeriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=fields")
    public openapisdk.models.shared.ImagesFieldValuesEnum[] fields;
    public GetV3ImagesIdSameSeriesQueryParams withFields(openapisdk.models.shared.ImagesFieldValuesEnum[] fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetV3ImagesIdSameSeriesQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Integer pageSize;
    public GetV3ImagesIdSameSeriesQueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}