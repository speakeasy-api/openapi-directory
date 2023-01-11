package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AmendmentsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public AmendmentsUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}