package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Resource
 * This complex type defines the resource (API method) and the current rate-limit data for that resource.
**/
public class Resource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Resource withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rates")
    public Rate[] rates;
    public Resource withRates(Rate[] rates) {
        this.rates = rates;
        return this;
    }
}