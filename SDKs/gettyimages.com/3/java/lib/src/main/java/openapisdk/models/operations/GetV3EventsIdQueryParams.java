package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3EventsIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=fields")
    public openapisdk.models.shared.EventDetailFieldValuesEnum[] fields;
    public GetV3EventsIdQueryParams withFields(openapisdk.models.shared.EventDetailFieldValuesEnum[] fields) {
        this.fields = fields;
        return this;
    }
}