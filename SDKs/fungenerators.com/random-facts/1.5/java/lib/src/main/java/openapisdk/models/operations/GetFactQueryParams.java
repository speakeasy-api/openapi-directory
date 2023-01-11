package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFactQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetFactQueryParams withId(String id) {
        this.id = id;
        return this;
    }
}