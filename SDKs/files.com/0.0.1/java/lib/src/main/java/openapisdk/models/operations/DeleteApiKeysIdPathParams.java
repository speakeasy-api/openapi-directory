package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteApiKeysIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public DeleteApiKeysIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}