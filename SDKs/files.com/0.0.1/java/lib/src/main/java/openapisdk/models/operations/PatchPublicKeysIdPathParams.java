package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchPublicKeysIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public PatchPublicKeysIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}