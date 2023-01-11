package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Transmitter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alt")
    public Float alt;
    public Transmitter withAlt(Float alt) {
        this.alt = alt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bwi")
    public Float bwi;
    public Transmitter withBwi(Float bwi) {
        this.bwi = bwi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frq")
    public Float frq;
    public Transmitter withFrq(Float frq) {
        this.frq = frq;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lat")
    public Float lat;
    public Transmitter withLat(Float lat) {
        this.lat = lat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lon")
    public Float lon;
    public Transmitter withLon(Float lon) {
        this.lon = lon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("txw")
    public Float txw;
    public Transmitter withTxw(Float txw) {
        this.txw = txw;
        return this;
    }
}