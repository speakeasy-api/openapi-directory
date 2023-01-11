package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LinkParameter3 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public LinkParameter3 withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in")
    public ParameterInEnum in;
    public LinkParameter3 withIn(ParameterInEnum in) {
        this.in = in;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public LinkParameter3 withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lovLink")
    public LovLink3 lovLink;
    public LinkParameter3 withLovLink(LovLink3 lovLink) {
        this.lovLink = lovLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lovRequired")
    public Boolean lovRequired;
    public LinkParameter3 withLovRequired(Boolean lovRequired) {
        this.lovRequired = lovRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pattern")
    public String pattern;
    public LinkParameter3 withPattern(String pattern) {
        this.pattern = pattern;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public Object properties;
    public LinkParameter3 withProperties(Object properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public LinkParameter3 withRequired(Boolean required) {
        this.required = required;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schema")
    public String schema;
    public LinkParameter3 withSchema(String schema) {
        this.schema = schema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public java.util.Map<String, Object> value;
    public LinkParameter3 withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
}