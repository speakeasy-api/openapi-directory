package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SegmentLocation
 * Specifies geographical dimension settings for a segment.
**/
public class SegmentLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Country")
    public SetDimension country;
    public SegmentLocation withCountry(SetDimension country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GPSPoint")
    public GpsPointDimension gpsPoint;
    public SegmentLocation withGpsPoint(GpsPointDimension gpsPoint) {
        this.gpsPoint = gpsPoint;
        return this;
    }
}