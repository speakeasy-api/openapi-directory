package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUrlDetailQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=fields")
    public String[] fields;
    public GetUrlDetailQueryParams withFields(String[] fields) {
        this.fields = fields;
        return this;
    }
}