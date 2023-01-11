package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConferenceSpRatingDefense {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explosiveness")
    public Double explosiveness;
    public ConferenceSpRatingDefense withExplosiveness(Double explosiveness) {
        this.explosiveness = explosiveness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("havoc")
    public ConferenceSpRatingDefenseHavoc havoc;
    public ConferenceSpRatingDefense withHavoc(ConferenceSpRatingDefenseHavoc havoc) {
        this.havoc = havoc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pasing")
    public Double pasing;
    public ConferenceSpRatingDefense withPasing(Double pasing) {
        this.pasing = pasing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passingDowns")
    public Double passingDowns;
    public ConferenceSpRatingDefense withPassingDowns(Double passingDowns) {
        this.passingDowns = passingDowns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rating")
    public Double rating;
    public ConferenceSpRatingDefense withRating(Double rating) {
        this.rating = rating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rushing")
    public Double rushing;
    public ConferenceSpRatingDefense withRushing(Double rushing) {
        this.rushing = rushing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("standardDowns")
    public Double standardDowns;
    public ConferenceSpRatingDefense withStandardDowns(Double standardDowns) {
        this.standardDowns = standardDowns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Double success;
    public ConferenceSpRatingDefense withSuccess(Double success) {
        this.success = success;
        return this;
    }
}