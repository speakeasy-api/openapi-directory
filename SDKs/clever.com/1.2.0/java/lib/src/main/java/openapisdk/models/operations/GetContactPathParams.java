package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContactPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetContactPathParams withId(String id) {
        this.id = id;
        return this;
    }
}