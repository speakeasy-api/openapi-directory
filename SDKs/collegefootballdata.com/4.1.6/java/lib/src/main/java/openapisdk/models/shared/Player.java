package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Player {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_name")
    public String firstName;
    public Player withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Long height;
    public Player withHeight(Long height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("home_city")
    public String homeCity;
    public Player withHomeCity(String homeCity) {
        this.homeCity = homeCity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("home_country")
    public String homeCountry;
    public Player withHomeCountry(String homeCountry) {
        this.homeCountry = homeCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("home_county_fips")
    public String homeCountyFips;
    public Player withHomeCountyFips(String homeCountyFips) {
        this.homeCountyFips = homeCountyFips;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("home_latitude")
    public Double homeLatitude;
    public Player withHomeLatitude(Double homeLatitude) {
        this.homeLatitude = homeLatitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("home_longitude")
    public Double homeLongitude;
    public Player withHomeLongitude(Double homeLongitude) {
        this.homeLongitude = homeLongitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("home_state")
    public String homeState;
    public Player withHomeState(String homeState) {
        this.homeState = homeState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Player withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jersey")
    public Long jersey;
    public Player withJersey(Long jersey) {
        this.jersey = jersey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public Player withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public String position;
    public Player withPosition(String position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recruit_ids")
    public Long[] recruitIds;
    public Player withRecruitIds(Long[] recruitIds) {
        this.recruitIds = recruitIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team")
    public String team;
    public Player withTeam(String team) {
        this.team = team;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weight")
    public Long weight;
    public Player withWeight(Long weight) {
        this.weight = weight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("year")
    public Long year;
    public Player withYear(Long year) {
        this.year = year;
        return this;
    }
}