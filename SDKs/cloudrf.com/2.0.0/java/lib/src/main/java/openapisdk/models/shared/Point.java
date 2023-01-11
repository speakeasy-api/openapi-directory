package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Point {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alt")
    public Float alt;
    public Point withAlt(Float alt) {
        this.alt = alt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lat")
    public Float lat;
    public Point withLat(Float lat) {
        this.lat = lat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lon")
    public Float lon;
    public Point withLon(Float lon) {
        this.lon = lon;
        return this;
    }
}