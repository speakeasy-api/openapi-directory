/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class NetworkRequest {
    /**
     * Height above ground level in metres
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public Integer alt;

    public NetworkRequest withAlt(Integer alt) {
        this.alt = alt;
        return this;
    }
    
    /**
     * Latitude in decimal degrees
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lat")
    public Float lat;

    public NetworkRequest withLat(Float lat) {
        this.lat = lat;
        return this;
    }
    
    /**
     * Longitude in decimal degrees
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lon")
    public Float lon;

    public NetworkRequest withLon(Float lon) {
        this.lon = lon;
        return this;
    }
    
    /**
     * Super layer name
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nam")
    public String nam;

    public NetworkRequest withNam(String nam) {
        this.nam = nam;
        return this;
    }
    
    /**
     * Network name
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=net")
    public String net;

    public NetworkRequest withNet(String net) {
        this.net = net;
        return this;
    }
    
    /**
     * Receiver gain in dBi
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rxg")
    public Float rxg;

    public NetworkRequest withRxg(Float rxg) {
        this.rxg = rxg;
        return this;
    }
    
    public NetworkRequest(@JsonProperty("alt") Integer alt, @JsonProperty("lat") Float lat, @JsonProperty("lon") Float lon, @JsonProperty("nam") String nam, @JsonProperty("net") String net) {
        this.alt = alt;
        this.lat = lat;
        this.lon = lon;
        this.nam = nam;
        this.net = net;
  }
}
