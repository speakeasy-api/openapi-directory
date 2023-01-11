package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AdvancedSeasonStatOffensePassingPlays {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explosiveness")
    public Double explosiveness;
    public AdvancedSeasonStatOffensePassingPlays withExplosiveness(Double explosiveness) {
        this.explosiveness = explosiveness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ppa")
    public Double ppa;
    public AdvancedSeasonStatOffensePassingPlays withPpa(Double ppa) {
        this.ppa = ppa;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate")
    public Double rate;
    public AdvancedSeasonStatOffensePassingPlays withRate(Double rate) {
        this.rate = rate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successRate")
    public Double successRate;
    public AdvancedSeasonStatOffensePassingPlays withSuccessRate(Double successRate) {
        this.successRate = successRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalPPA")
    public Double totalPPA;
    public AdvancedSeasonStatOffensePassingPlays withTotalPpa(Double totalPPA) {
        this.totalPPA = totalPPA;
        return this;
    }
}