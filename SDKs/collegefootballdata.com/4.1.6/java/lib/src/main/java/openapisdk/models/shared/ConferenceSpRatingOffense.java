package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConferenceSpRatingOffense {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explosiveness")
    public Double explosiveness;
    public ConferenceSpRatingOffense withExplosiveness(Double explosiveness) {
        this.explosiveness = explosiveness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pace")
    public Double pace;
    public ConferenceSpRatingOffense withPace(Double pace) {
        this.pace = pace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passing")
    public Double passing;
    public ConferenceSpRatingOffense withPassing(Double passing) {
        this.passing = passing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passingDowns")
    public Double passingDowns;
    public ConferenceSpRatingOffense withPassingDowns(Double passingDowns) {
        this.passingDowns = passingDowns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rating")
    public Double rating;
    public ConferenceSpRatingOffense withRating(Double rating) {
        this.rating = rating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runRate")
    public Double runRate;
    public ConferenceSpRatingOffense withRunRate(Double runRate) {
        this.runRate = runRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rushing")
    public Double rushing;
    public ConferenceSpRatingOffense withRushing(Double rushing) {
        this.rushing = rushing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("standardDowns")
    public Double standardDowns;
    public ConferenceSpRatingOffense withStandardDowns(Double standardDowns) {
        this.standardDowns = standardDowns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Double success;
    public ConferenceSpRatingOffense withSuccess(Double success) {
        this.success = success;
        return this;
    }
}