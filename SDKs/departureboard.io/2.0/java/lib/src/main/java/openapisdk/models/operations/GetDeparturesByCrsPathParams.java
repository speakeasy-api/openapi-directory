package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeparturesByCrsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CRS")
    public String crs;
    public GetDeparturesByCrsPathParams withCrs(String crs) {
        this.crs = crs;
        return this;
    }
}