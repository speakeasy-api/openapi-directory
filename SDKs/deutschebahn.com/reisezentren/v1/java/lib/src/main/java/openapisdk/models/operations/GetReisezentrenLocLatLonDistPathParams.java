package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReisezentrenLocLatLonDistPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dist")
    public Float dist;
    public GetReisezentrenLocLatLonDistPathParams withDist(Float dist) {
        this.dist = dist;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=lat")
    public Float lat;
    public GetReisezentrenLocLatLonDistPathParams withLat(Float lat) {
        this.lat = lat;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=lon")
    public Float lon;
    public GetReisezentrenLocLatLonDistPathParams withLon(Float lon) {
        this.lon = lon;
        return this;
    }
}