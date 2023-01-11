package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInfoTldZonePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=zone")
    public String zone;
    public GetInfoTldZonePathParams withZone(String zone) {
        this.zone = zone;
        return this;
    }
}