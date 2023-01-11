package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSshKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteSshKeyPathParams withId(String id) {
        this.id = id;
        return this;
    }
}