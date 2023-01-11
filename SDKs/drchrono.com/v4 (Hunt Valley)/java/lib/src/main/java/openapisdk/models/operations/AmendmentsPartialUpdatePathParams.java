package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AmendmentsPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public AmendmentsPartialUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}