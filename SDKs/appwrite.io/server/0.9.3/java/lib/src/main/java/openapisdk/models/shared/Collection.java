package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Collection
 * Collection
**/
public class Collection {
    @JsonProperty("$id")
    public String dollarId;
    public Collection withDollarId(String dollarId) {
        this.dollarId = dollarId;
        return this;
    }
    @JsonProperty("$permissions")
    public java.util.Map<String, Object> dollarPermissions;
    public Collection withDollarPermissions(java.util.Map<String, Object> dollarPermissions) {
        this.dollarPermissions = dollarPermissions;
        return this;
    }
    @JsonProperty("dateCreated")
    public Integer dateCreated;
    public Collection withDateCreated(Integer dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonProperty("dateUpdated")
    public Integer dateUpdated;
    public Collection withDateUpdated(Integer dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Collection withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("rules")
    public Rule[] rules;
    public Collection withRules(Rule[] rules) {
        this.rules = rules;
        return this;
    }
}