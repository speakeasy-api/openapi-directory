package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRiddleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public DeleteRiddleQueryParams withId(String id) {
        this.id = id;
        return this;
    }
}