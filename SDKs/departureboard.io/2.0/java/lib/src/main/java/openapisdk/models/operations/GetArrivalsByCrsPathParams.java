package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetArrivalsByCrsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CRS")
    public String crs;
    public GetArrivalsByCrsPathParams withCrs(String crs) {
        this.crs = crs;
        return this;
    }
}