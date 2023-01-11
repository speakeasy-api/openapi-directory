package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePermissionsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public DeletePermissionsIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}