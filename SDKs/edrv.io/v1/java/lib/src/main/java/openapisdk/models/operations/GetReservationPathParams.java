package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReservationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetReservationPathParams withId(String id) {
        this.id = id;
        return this;
    }
}