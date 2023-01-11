package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public Integer alt;
    public NetworkQueryParams withAlt(Integer alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lat")
    public Float lat;
    public NetworkQueryParams withLat(Float lat) {
        this.lat = lat;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lon")
    public Float lon;
    public NetworkQueryParams withLon(Float lon) {
        this.lon = lon;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nam")
    public String nam;
    public NetworkQueryParams withNam(String nam) {
        this.nam = nam;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=net")
    public String net;
    public NetworkQueryParams withNet(String net) {
        this.net = net;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rxg")
    public Float rxg;
    public NetworkQueryParams withRxg(Float rxg) {
        this.rxg = rxg;
        return this;
    }
}