package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTldDomainItemPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=zone_id")
    public String zoneId;
    public GetTldDomainItemPathParams withZoneId(String zoneId) {
        this.zoneId = zoneId;
        return this;
    }
}