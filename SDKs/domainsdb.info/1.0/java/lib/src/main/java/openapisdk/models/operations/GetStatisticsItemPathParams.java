package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStatisticsItemPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=zone")
    public String zone;
    public GetStatisticsItemPathParams withZone(String zone) {
        this.zone = zone;
        return this;
    }
}