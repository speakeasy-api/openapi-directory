package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteGroupUsersIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public DeleteGroupUsersIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}