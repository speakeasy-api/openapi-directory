package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LeadsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public LeadsDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
}