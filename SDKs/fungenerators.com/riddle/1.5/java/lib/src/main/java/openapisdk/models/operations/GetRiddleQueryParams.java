package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRiddleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetRiddleQueryParams withId(String id) {
        this.id = id;
        return this;
    }
}