package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchApiKeysIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public PatchApiKeysIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}