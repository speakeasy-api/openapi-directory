package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchMessagesIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public PatchMessagesIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}