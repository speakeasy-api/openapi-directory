package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFastestDeparturesByCrsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CRS")
    public String crs;
    public GetFastestDeparturesByCrsPathParams withCrs(String crs) {
        this.crs = crs;
        return this;
    }
}