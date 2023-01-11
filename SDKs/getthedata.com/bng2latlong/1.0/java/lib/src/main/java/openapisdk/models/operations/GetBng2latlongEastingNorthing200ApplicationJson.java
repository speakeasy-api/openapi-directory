package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetBng2latlongEastingNorthing200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("easting")
    public Long easting;
    public GetBng2latlongEastingNorthing200ApplicationJson withEasting(Long easting) {
        this.easting = easting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;
    public GetBng2latlongEastingNorthing200ApplicationJson withError(String error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public Double latitude;
    public GetBng2latlongEastingNorthing200ApplicationJson withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public Double longitude;
    public GetBng2latlongEastingNorthing200ApplicationJson withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("northing")
    public Long northing;
    public GetBng2latlongEastingNorthing200ApplicationJson withNorthing(Long northing) {
        this.northing = northing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetBng2latlongEastingNorthing200ApplicationJsonStatusEnum status;
    public GetBng2latlongEastingNorthing200ApplicationJson withStatus(GetBng2latlongEastingNorthing200ApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
}