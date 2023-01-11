package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LeadsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public LeadsUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}