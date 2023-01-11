package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMemberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetMemberPathParams withId(String id) {
        this.id = id;
        return this;
    }
}