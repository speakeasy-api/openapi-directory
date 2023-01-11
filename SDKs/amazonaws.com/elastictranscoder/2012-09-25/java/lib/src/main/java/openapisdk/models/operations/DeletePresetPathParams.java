package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePresetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Id")
    public String id;
    public DeletePresetPathParams withId(String id) {
        this.id = id;
        return this;
    }
}