package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AdvancedGameStatDefenseRushingPlays {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explosiveness")
    public Double explosiveness;
    public AdvancedGameStatDefenseRushingPlays withExplosiveness(Double explosiveness) {
        this.explosiveness = explosiveness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ppa")
    public Double ppa;
    public AdvancedGameStatDefenseRushingPlays withPpa(Double ppa) {
        this.ppa = ppa;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successRate")
    public Double successRate;
    public AdvancedGameStatDefenseRushingPlays withSuccessRate(Double successRate) {
        this.successRate = successRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalPPA")
    public Double totalPPA;
    public AdvancedGameStatDefenseRushingPlays withTotalPpa(Double totalPPA) {
        this.totalPPA = totalPPA;
        return this;
    }
}