package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamSpRatingOffense {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explosiveness")
    public Double explosiveness;
    public TeamSpRatingOffense withExplosiveness(Double explosiveness) {
        this.explosiveness = explosiveness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pace")
    public Double pace;
    public TeamSpRatingOffense withPace(Double pace) {
        this.pace = pace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passing")
    public Double passing;
    public TeamSpRatingOffense withPassing(Double passing) {
        this.passing = passing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passingDowns")
    public Double passingDowns;
    public TeamSpRatingOffense withPassingDowns(Double passingDowns) {
        this.passingDowns = passingDowns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ranking")
    public Double ranking;
    public TeamSpRatingOffense withRanking(Double ranking) {
        this.ranking = ranking;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rating")
    public Double rating;
    public TeamSpRatingOffense withRating(Double rating) {
        this.rating = rating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runRate")
    public Double runRate;
    public TeamSpRatingOffense withRunRate(Double runRate) {
        this.runRate = runRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rushing")
    public Double rushing;
    public TeamSpRatingOffense withRushing(Double rushing) {
        this.rushing = rushing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("standardDowns")
    public Double standardDowns;
    public TeamSpRatingOffense withStandardDowns(Double standardDowns) {
        this.standardDowns = standardDowns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Double success;
    public TeamSpRatingOffense withSuccess(Double success) {
        this.success = success;
        return this;
    }
}