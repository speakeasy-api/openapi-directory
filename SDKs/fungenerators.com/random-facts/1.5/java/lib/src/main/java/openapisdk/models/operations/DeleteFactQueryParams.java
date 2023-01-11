package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFactQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public DeleteFactQueryParams withId(String id) {
        this.id = id;
        return this;
    }
}