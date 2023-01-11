package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDomainsTldZoneIdDownloadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=zone_id")
    public String zoneId;
    public GetDomainsTldZoneIdDownloadPathParams withZoneId(String zoneId) {
        this.zoneId = zoneId;
        return this;
    }
}