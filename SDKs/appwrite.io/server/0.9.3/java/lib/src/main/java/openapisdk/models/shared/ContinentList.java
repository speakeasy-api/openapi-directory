package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ContinentList
 * Continents List
**/
public class ContinentList {
    @JsonProperty("continents")
    public Continent[] continents;
    public ContinentList withContinents(Continent[] continents) {
        this.continents = continents;
        return this;
    }
    @JsonProperty("sum")
    public Integer sum;
    public ContinentList withSum(Integer sum) {
        this.sum = sum;
        return this;
    }
}