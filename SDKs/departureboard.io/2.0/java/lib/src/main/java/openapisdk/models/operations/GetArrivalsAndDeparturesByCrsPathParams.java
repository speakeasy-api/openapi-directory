package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetArrivalsAndDeparturesByCrsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CRS")
    public String crs;
    public GetArrivalsAndDeparturesByCrsPathParams withCrs(String crs) {
        this.crs = crs;
        return this;
    }
}