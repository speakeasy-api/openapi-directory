package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchV1FieldsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public GetSearchV1FieldsQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
}