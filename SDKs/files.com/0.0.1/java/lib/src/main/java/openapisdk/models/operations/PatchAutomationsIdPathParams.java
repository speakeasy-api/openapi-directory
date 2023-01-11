package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchAutomationsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public PatchAutomationsIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}