package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMemberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteMemberPathParams withId(String id) {
        this.id = id;
        return this;
    }
}