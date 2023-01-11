package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ResultRowValue
 * Provides a single value and metadata about that value as part of an array of query results for a standard metric that applies to an application, campaign, or journey.
**/
public class ResultRowValue {
    @JsonProperty("Key")
    public String key;
    public ResultRowValue withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonProperty("Type")
    public String type;
    public ResultRowValue withType(String type) {
        this.type = type;
        return this;
    }
    @JsonProperty("Value")
    public String value;
    public ResultRowValue withValue(String value) {
        this.value = value;
        return this;
    }
}