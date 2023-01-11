package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetTokenPathParams withId(String id) {
        this.id = id;
        return this;
    }
}