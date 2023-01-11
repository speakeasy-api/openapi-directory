package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AdvancedGameStatDefense {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("drives")
    public Long drives;
    public AdvancedGameStatDefense withDrives(Long drives) {
        this.drives = drives;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explosiveness")
    public Double explosiveness;
    public AdvancedGameStatDefense withExplosiveness(Double explosiveness) {
        this.explosiveness = explosiveness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineYards")
    public Double lineYards;
    public AdvancedGameStatDefense withLineYards(Double lineYards) {
        this.lineYards = lineYards;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineYardsTotal")
    public Double lineYardsTotal;
    public AdvancedGameStatDefense withLineYardsTotal(Double lineYardsTotal) {
        this.lineYardsTotal = lineYardsTotal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("openFieldYards")
    public Double openFieldYards;
    public AdvancedGameStatDefense withOpenFieldYards(Double openFieldYards) {
        this.openFieldYards = openFieldYards;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("openFieldYardsTotal")
    public Long openFieldYardsTotal;
    public AdvancedGameStatDefense withOpenFieldYardsTotal(Long openFieldYardsTotal) {
        this.openFieldYardsTotal = openFieldYardsTotal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passingDowns")
    public AdvancedGameStatDefensePassingDowns passingDowns;
    public AdvancedGameStatDefense withPassingDowns(AdvancedGameStatDefensePassingDowns passingDowns) {
        this.passingDowns = passingDowns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passingPlays")
    public AdvancedGameStatDefensePassingPlays passingPlays;
    public AdvancedGameStatDefense withPassingPlays(AdvancedGameStatDefensePassingPlays passingPlays) {
        this.passingPlays = passingPlays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plays")
    public Long plays;
    public AdvancedGameStatDefense withPlays(Long plays) {
        this.plays = plays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("powerSuccess")
    public Double powerSuccess;
    public AdvancedGameStatDefense withPowerSuccess(Double powerSuccess) {
        this.powerSuccess = powerSuccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ppa")
    public Double ppa;
    public AdvancedGameStatDefense withPpa(Double ppa) {
        this.ppa = ppa;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rushingPlays")
    public AdvancedGameStatDefenseRushingPlays rushingPlays;
    public AdvancedGameStatDefense withRushingPlays(AdvancedGameStatDefenseRushingPlays rushingPlays) {
        this.rushingPlays = rushingPlays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondLevelYards")
    public Double secondLevelYards;
    public AdvancedGameStatDefense withSecondLevelYards(Double secondLevelYards) {
        this.secondLevelYards = secondLevelYards;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondLevelYardsTotal")
    public Long secondLevelYardsTotal;
    public AdvancedGameStatDefense withSecondLevelYardsTotal(Long secondLevelYardsTotal) {
        this.secondLevelYardsTotal = secondLevelYardsTotal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("standardDowns")
    public AdvancedGameStatDefenseStandardDowns standardDowns;
    public AdvancedGameStatDefense withStandardDowns(AdvancedGameStatDefenseStandardDowns standardDowns) {
        this.standardDowns = standardDowns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stuffRate")
    public Double stuffRate;
    public AdvancedGameStatDefense withStuffRate(Double stuffRate) {
        this.stuffRate = stuffRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successRate")
    public Double successRate;
    public AdvancedGameStatDefense withSuccessRate(Double successRate) {
        this.successRate = successRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalPPA")
    public Double totalPPA;
    public AdvancedGameStatDefense withTotalPpa(Double totalPPA) {
        this.totalPPA = totalPPA;
        return this;
    }
}