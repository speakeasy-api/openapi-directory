package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OfficesAddExamRoomPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public OfficesAddExamRoomPathParams withId(String id) {
        this.id = id;
        return this;
    }
}