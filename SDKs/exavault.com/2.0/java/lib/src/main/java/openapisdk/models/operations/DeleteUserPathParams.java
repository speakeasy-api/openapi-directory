package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public DeleteUserPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}