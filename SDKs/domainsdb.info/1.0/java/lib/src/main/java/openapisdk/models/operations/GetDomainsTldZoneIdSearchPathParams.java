package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDomainsTldZoneIdSearchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=zone_id")
    public String zoneId;
    public GetDomainsTldZoneIdSearchPathParams withZoneId(String zoneId) {
        this.zoneId = zoneId;
        return this;
    }
}