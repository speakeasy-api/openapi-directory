package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSatellitePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=satelliteId")
    public String satelliteId;
    public GetSatellitePathParams withSatelliteId(String satelliteId) {
        this.satelliteId = satelliteId;
        return this;
    }
}