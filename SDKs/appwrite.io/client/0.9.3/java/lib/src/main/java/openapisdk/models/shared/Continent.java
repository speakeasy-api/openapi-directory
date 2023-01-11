package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Continent
 * Continent
**/
public class Continent {
    @JsonProperty("code")
    public String code;
    public Continent withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Continent withName(String name) {
        this.name = name;
        return this;
    }
}