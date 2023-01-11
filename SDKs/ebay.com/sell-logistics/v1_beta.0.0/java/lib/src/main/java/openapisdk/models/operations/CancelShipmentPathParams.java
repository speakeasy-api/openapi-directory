package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelShipmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shipmentId")
    public String shipmentId;
    public CancelShipmentPathParams withShipmentId(String shipmentId) {
        this.shipmentId = shipmentId;
        return this;
    }
}