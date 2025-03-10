/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class AdvancedSeasonStatDefenseRushingPlays {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explosiveness")
    public Double explosiveness;

    public AdvancedSeasonStatDefenseRushingPlays withExplosiveness(Double explosiveness) {
        this.explosiveness = explosiveness;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ppa")
    public Double ppa;

    public AdvancedSeasonStatDefenseRushingPlays withPpa(Double ppa) {
        this.ppa = ppa;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate")
    public Double rate;

    public AdvancedSeasonStatDefenseRushingPlays withRate(Double rate) {
        this.rate = rate;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successRate")
    public Double successRate;

    public AdvancedSeasonStatDefenseRushingPlays withSuccessRate(Double successRate) {
        this.successRate = successRate;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalPPA")
    public Double totalPPA;

    public AdvancedSeasonStatDefenseRushingPlays withTotalPPA(Double totalPPA) {
        this.totalPPA = totalPPA;
        return this;
    }
    
    public AdvancedSeasonStatDefenseRushingPlays(){}
}
