package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DrivesUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}