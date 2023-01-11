package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Recruit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("athleteId")
    public Long athleteId;
    public Recruit withAthleteId(Long athleteId) {
        this.athleteId = athleteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public Recruit withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committedTo")
    public String committedTo;
    public Recruit withCommittedTo(String committedTo) {
        this.committedTo = committedTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public Recruit withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Double height;
    public Recruit withHeight(Double height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hometownInfo")
    public RecruitHometownInfo hometownInfo;
    public Recruit withHometownInfo(RecruitHometownInfo hometownInfo) {
        this.hometownInfo = hometownInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Recruit withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Recruit withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public String position;
    public Recruit withPosition(String position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ranking")
    public Long ranking;
    public Recruit withRanking(Long ranking) {
        this.ranking = ranking;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rating")
    public Double rating;
    public Recruit withRating(Double rating) {
        this.rating = rating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recruitType")
    public String recruitType;
    public Recruit withRecruitType(String recruitType) {
        this.recruitType = recruitType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("school")
    public String school;
    public Recruit withSchool(String school) {
        this.school = school;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stars")
    public Long stars;
    public Recruit withStars(Long stars) {
        this.stars = stars;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateProvince")
    public String stateProvince;
    public Recruit withStateProvince(String stateProvince) {
        this.stateProvince = stateProvince;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weight")
    public Long weight;
    public Recruit withWeight(Long weight) {
        this.weight = weight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("year")
    public Long year;
    public Recruit withYear(Long year) {
        this.year = year;
        return this;
    }
}