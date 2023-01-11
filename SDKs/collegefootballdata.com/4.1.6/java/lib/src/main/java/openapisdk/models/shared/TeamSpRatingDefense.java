package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamSpRatingDefense {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explosiveness")
    public Double explosiveness;
    public TeamSpRatingDefense withExplosiveness(Double explosiveness) {
        this.explosiveness = explosiveness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("havoc")
    public TeamSpRatingDefenseHavoc havoc;
    public TeamSpRatingDefense withHavoc(TeamSpRatingDefenseHavoc havoc) {
        this.havoc = havoc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pasing")
    public Double pasing;
    public TeamSpRatingDefense withPasing(Double pasing) {
        this.pasing = pasing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passingDowns")
    public Double passingDowns;
    public TeamSpRatingDefense withPassingDowns(Double passingDowns) {
        this.passingDowns = passingDowns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ranking")
    public Double ranking;
    public TeamSpRatingDefense withRanking(Double ranking) {
        this.ranking = ranking;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rating")
    public Double rating;
    public TeamSpRatingDefense withRating(Double rating) {
        this.rating = rating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rushing")
    public Double rushing;
    public TeamSpRatingDefense withRushing(Double rushing) {
        this.rushing = rushing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("standardDowns")
    public Double standardDowns;
    public TeamSpRatingDefense withStandardDowns(Double standardDowns) {
        this.standardDowns = standardDowns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Double success;
    public TeamSpRatingDefense withSuccess(Double success) {
        this.success = success;
        return this;
    }
}