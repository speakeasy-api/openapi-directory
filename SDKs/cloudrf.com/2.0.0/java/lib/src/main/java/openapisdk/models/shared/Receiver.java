package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Receiver {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alt")
    public Float alt;
    public Receiver withAlt(Float alt) {
        this.alt = alt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lat")
    public Float lat;
    public Receiver withLat(Float lat) {
        this.lat = lat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lon")
    public Float lon;
    public Receiver withLon(Float lon) {
        this.lon = lon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rxg")
    public Float rxg;
    public Receiver withRxg(Float rxg) {
        this.rxg = rxg;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rxs")
    public Float rxs;
    public Receiver withRxs(Float rxs) {
        this.rxs = rxs;
        return this;
    }
}