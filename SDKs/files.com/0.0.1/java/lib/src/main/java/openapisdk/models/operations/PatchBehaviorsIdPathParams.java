package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchBehaviorsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public PatchBehaviorsIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}