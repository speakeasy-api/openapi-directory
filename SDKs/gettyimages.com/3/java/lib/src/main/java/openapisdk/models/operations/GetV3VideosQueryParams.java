package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3VideosQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=fields")
    public openapisdk.models.shared.VideoDetailFieldValuesEnum[] fields;
    public GetV3VideosQueryParams withFields(openapisdk.models.shared.VideoDetailFieldValuesEnum[] fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=ids")
    public String[] ids;
    public GetV3VideosQueryParams withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
}