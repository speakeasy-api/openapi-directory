package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TravelCenter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public TravelCenter withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public TravelCenter withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public TravelCenter withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lat")
    public Double lat;
    public TravelCenter withLat(Double lat) {
        this.lat = lat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lon")
    public Double lon;
    public TravelCenter withLon(Double lon) {
        this.lon = lon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TravelCenter withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("openingTimes")
    public TravelCenterOpeningTimes openingTimes;
    public TravelCenter withOpeningTimes(TravelCenterOpeningTimes openingTimes) {
        this.openingTimes = openingTimes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postCode")
    public String postCode;
    public TravelCenter withPostCode(String postCode) {
        this.postCode = postCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public TravelCenterTypeEnum type;
    public TravelCenter withType(TravelCenterTypeEnum type) {
        this.type = type;
        return this;
    }
}