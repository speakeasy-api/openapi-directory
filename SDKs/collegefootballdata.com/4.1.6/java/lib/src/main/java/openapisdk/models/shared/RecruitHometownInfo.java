package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RecruitHometownInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countyFips")
    public String countyFips;
    public RecruitHometownInfo withCountyFips(String countyFips) {
        this.countyFips = countyFips;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public Double latitude;
    public RecruitHometownInfo withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public Double longitude;
    public RecruitHometownInfo withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
}