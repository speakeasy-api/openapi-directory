package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OfficesPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public OfficesPartialUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}