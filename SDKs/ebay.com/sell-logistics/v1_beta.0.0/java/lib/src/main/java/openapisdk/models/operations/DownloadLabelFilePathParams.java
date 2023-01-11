package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DownloadLabelFilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shipmentId")
    public String shipmentId;
    public DownloadLabelFilePathParams withShipmentId(String shipmentId) {
        this.shipmentId = shipmentId;
        return this;
    }
}