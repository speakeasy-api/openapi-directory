package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Venue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capacity")
    public Long capacity;
    public Venue withCapacity(Long capacity) {
        this.capacity = capacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public Venue withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country_code")
    public String countryCode;
    public Venue withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dome")
    public Boolean dome;
    public Venue withDome(Boolean dome) {
        this.dome = dome;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("elevation")
    public Double elevation;
    public Venue withElevation(Double elevation) {
        this.elevation = elevation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grass")
    public Boolean grass;
    public Venue withGrass(Boolean grass) {
        this.grass = grass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Venue withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public VenueLocation location;
    public Venue withLocation(VenueLocation location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Venue withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public Venue withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public Venue withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("year")
    public Long year;
    public Venue withYear(Long year) {
        this.year = year;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zip")
    public String zip;
    public Venue withZip(String zip) {
        this.zip = zip;
        return this;
    }
}