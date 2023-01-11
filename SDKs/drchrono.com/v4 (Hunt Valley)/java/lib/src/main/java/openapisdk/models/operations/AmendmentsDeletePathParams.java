package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AmendmentsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public AmendmentsDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
}