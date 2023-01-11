package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatereservationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UpdatereservationPathParams withId(String id) {
        this.id = id;
        return this;
    }
}