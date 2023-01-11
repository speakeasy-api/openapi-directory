package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3VideosIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=fields")
    public openapisdk.models.shared.VideoDetailFieldValuesEnum[] fields;
    public GetV3VideosIdQueryParams withFields(openapisdk.models.shared.VideoDetailFieldValuesEnum[] fields) {
        this.fields = fields;
        return this;
    }
}