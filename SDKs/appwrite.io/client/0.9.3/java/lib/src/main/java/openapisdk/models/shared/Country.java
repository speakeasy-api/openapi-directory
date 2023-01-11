package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Country
 * Country
**/
public class Country {
    @JsonProperty("code")
    public String code;
    public Country withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Country withName(String name) {
        this.name = name;
        return this;
    }
}