package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DrivesDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
}