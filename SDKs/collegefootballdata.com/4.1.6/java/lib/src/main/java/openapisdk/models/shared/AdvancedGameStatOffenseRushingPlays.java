package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AdvancedGameStatOffenseRushingPlays {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explosiveness")
    public Double explosiveness;
    public AdvancedGameStatOffenseRushingPlays withExplosiveness(Double explosiveness) {
        this.explosiveness = explosiveness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ppa")
    public Double ppa;
    public AdvancedGameStatOffenseRushingPlays withPpa(Double ppa) {
        this.ppa = ppa;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successRate")
    public Double successRate;
    public AdvancedGameStatOffenseRushingPlays withSuccessRate(Double successRate) {
        this.successRate = successRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalPPA")
    public Double totalPPA;
    public AdvancedGameStatOffenseRushingPlays withTotalPpa(Double totalPPA) {
        this.totalPPA = totalPPA;
        return this;
    }
}