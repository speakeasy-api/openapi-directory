package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3EventsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=fields")
    public openapisdk.models.shared.EventDetailFieldValuesEnum[] fields;
    public GetV3EventsQueryParams withFields(openapisdk.models.shared.EventDetailFieldValuesEnum[] fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=ids")
    public Integer[] ids;
    public GetV3EventsQueryParams withIds(Integer[] ids) {
        this.ids = ids;
        return this;
    }
}