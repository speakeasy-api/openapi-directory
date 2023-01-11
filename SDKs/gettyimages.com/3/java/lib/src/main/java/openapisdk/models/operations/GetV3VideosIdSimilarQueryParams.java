package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3VideosIdSimilarQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=fields")
    public openapisdk.models.shared.BlendedVideosFieldValuesEnum[] fields;
    public GetV3VideosIdSimilarQueryParams withFields(openapisdk.models.shared.BlendedVideosFieldValuesEnum[] fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetV3VideosIdSimilarQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Integer pageSize;
    public GetV3VideosIdSimilarQueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}