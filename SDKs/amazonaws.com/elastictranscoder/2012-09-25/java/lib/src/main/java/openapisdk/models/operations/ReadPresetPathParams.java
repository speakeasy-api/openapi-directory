package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReadPresetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Id")
    public String id;
    public ReadPresetPathParams withId(String id) {
        this.id = id;
        return this;
    }
}