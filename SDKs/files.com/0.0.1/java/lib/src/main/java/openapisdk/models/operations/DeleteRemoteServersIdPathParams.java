package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRemoteServersIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public DeleteRemoteServersIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}