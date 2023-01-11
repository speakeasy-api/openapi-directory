package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Country {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iso_alpha_2")
    public String isoAlpha2;
    public Country withIsoAlpha2(String isoAlpha2) {
        this.isoAlpha2 = isoAlpha2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iso_alpha_3")
    public String isoAlpha3;
    public Country withIsoAlpha3(String isoAlpha3) {
        this.isoAlpha3 = isoAlpha3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Country withName(String name) {
        this.name = name;
        return this;
    }
}