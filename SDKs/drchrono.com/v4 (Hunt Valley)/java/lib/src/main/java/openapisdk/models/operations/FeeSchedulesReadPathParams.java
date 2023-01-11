package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FeeSchedulesReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public FeeSchedulesReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}