package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReisezentrenLocLatLonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=lat")
    public Float lat;
    public GetReisezentrenLocLatLonPathParams withLat(Float lat) {
        this.lat = lat;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=lon")
    public Float lon;
    public GetReisezentrenLocLatLonPathParams withLon(Float lon) {
        this.lon = lon;
        return this;
    }
}