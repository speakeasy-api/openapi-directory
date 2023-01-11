package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Rule
 * Rule
**/
public class Rule {
    @JsonProperty("$collection")
    public String dollarCollection;
    public Rule withDollarCollection(String dollarCollection) {
        this.dollarCollection = dollarCollection;
        return this;
    }
    @JsonProperty("$id")
    public String dollarId;
    public Rule withDollarId(String dollarId) {
        this.dollarId = dollarId;
        return this;
    }
    @JsonProperty("array")
    public Boolean array;
    public Rule withArray(Boolean array) {
        this.array = array;
        return this;
    }
    @JsonProperty("default")
    public String default_;
    public Rule withDefault(String default_) {
        this.default_ = default_;
        return this;
    }
    @JsonProperty("key")
    public String key;
    public Rule withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonProperty("label")
    public String label;
    public Rule withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("list")
    public String[] list;
    public Rule withList(String[] list) {
        this.list = list;
        return this;
    }
    @JsonProperty("required")
    public Boolean required;
    public Rule withRequired(Boolean required) {
        this.required = required;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public Rule withType(String type) {
        this.type = type;
        return this;
    }
}