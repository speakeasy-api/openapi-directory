package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RecordLocations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public RecordLocations withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lat")
    public Double lat;
    public RecordLocations withLat(Double lat) {
        this.lat = lat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lng")
    public Double lng;
    public RecordLocations withLng(Double lng) {
        this.lng = lng;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placename")
    public String placename;
    public RecordLocations withPlacename(String placename) {
        this.placename = placename;
        return this;
    }
}