package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AdvancedGameStatOffensePassingPlays {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explosiveness")
    public Double explosiveness;
    public AdvancedGameStatOffensePassingPlays withExplosiveness(Double explosiveness) {
        this.explosiveness = explosiveness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ppa")
    public Double ppa;
    public AdvancedGameStatOffensePassingPlays withPpa(Double ppa) {
        this.ppa = ppa;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successRate")
    public Double successRate;
    public AdvancedGameStatOffensePassingPlays withSuccessRate(Double successRate) {
        this.successRate = successRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalPPA")
    public Double totalPPA;
    public AdvancedGameStatOffensePassingPlays withTotalPpa(Double totalPPA) {
        this.totalPPA = totalPPA;
        return this;
    }
}