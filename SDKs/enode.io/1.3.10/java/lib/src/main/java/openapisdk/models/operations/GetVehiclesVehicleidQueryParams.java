package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVehiclesVehicleidQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=field[]")
    public GetVehiclesVehicleidFieldEnum[] field;
    public GetVehiclesVehicleidQueryParams withField(GetVehiclesVehicleidFieldEnum[] field) {
        this.field = field;
        return this;
    }
}