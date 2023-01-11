package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchFieldsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fieldName")
    public String fieldName;
    public FetchFieldsQueryParams withFieldName(String fieldName) {
        this.fieldName = fieldName;
        return this;
    }
}