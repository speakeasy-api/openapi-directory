package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrderQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fieldGroups")
    public String fieldGroups;
    public GetOrderQueryParams withFieldGroups(String fieldGroups) {
        this.fieldGroups = fieldGroups;
        return this;
    }
}