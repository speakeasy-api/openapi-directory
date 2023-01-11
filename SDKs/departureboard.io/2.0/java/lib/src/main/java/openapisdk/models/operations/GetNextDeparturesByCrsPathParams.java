package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNextDeparturesByCrsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CRS")
    public String crs;
    public GetNextDeparturesByCrsPathParams withCrs(String crs) {
        this.crs = crs;
        return this;
    }
}