package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3VideosIdSameSeriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=fields")
    public openapisdk.models.shared.BlendedVideosFieldValuesEnum[] fields;
    public GetV3VideosIdSameSeriesQueryParams withFields(openapisdk.models.shared.BlendedVideosFieldValuesEnum[] fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetV3VideosIdSameSeriesQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Integer pageSize;
    public GetV3VideosIdSameSeriesQueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}