package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetShipmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shipmentId")
    public String shipmentId;
    public GetShipmentPathParams withShipmentId(String shipmentId) {
        this.shipmentId = shipmentId;
        return this;
    }
}