package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchClickwrapsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public PatchClickwrapsIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}