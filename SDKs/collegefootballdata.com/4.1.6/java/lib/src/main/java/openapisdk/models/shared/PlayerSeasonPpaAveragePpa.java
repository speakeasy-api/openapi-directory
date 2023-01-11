package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PlayerSeasonPpaAveragePpa {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("all")
    public Double all;
    public PlayerSeasonPpaAveragePpa withAll(Double all) {
        this.all = all;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstDown")
    public Double firstDown;
    public PlayerSeasonPpaAveragePpa withFirstDown(Double firstDown) {
        this.firstDown = firstDown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pass")
    public Double pass;
    public PlayerSeasonPpaAveragePpa withPass(Double pass) {
        this.pass = pass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passingDowns")
    public Double passingDowns;
    public PlayerSeasonPpaAveragePpa withPassingDowns(Double passingDowns) {
        this.passingDowns = passingDowns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rush")
    public Double rush;
    public PlayerSeasonPpaAveragePpa withRush(Double rush) {
        this.rush = rush;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondDown")
    public Double secondDown;
    public PlayerSeasonPpaAveragePpa withSecondDown(Double secondDown) {
        this.secondDown = secondDown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("standardDowns")
    public Double standardDowns;
    public PlayerSeasonPpaAveragePpa withStandardDowns(Double standardDowns) {
        this.standardDowns = standardDowns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thirdDown")
    public Double thirdDown;
    public PlayerSeasonPpaAveragePpa withThirdDown(Double thirdDown) {
        this.thirdDown = thirdDown;
        return this;
    }
}