package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BeezUpCommonLinkParameter3 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public BeezUpCommonLinkParameter3 withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in")
    public BeezUpCommonParameterInEnum in;
    public BeezUpCommonLinkParameter3 withIn(BeezUpCommonParameterInEnum in) {
        this.in = in;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public BeezUpCommonLinkParameter3 withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lovLink")
    public BeezUpCommonLovLink3 lovLink;
    public BeezUpCommonLinkParameter3 withLovLink(BeezUpCommonLovLink3 lovLink) {
        this.lovLink = lovLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lovRequired")
    public Boolean lovRequired;
    public BeezUpCommonLinkParameter3 withLovRequired(Boolean lovRequired) {
        this.lovRequired = lovRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public java.util.Map<String, BeezUpCommonLinkParameterProperty3> properties;
    public BeezUpCommonLinkParameter3 withProperties(java.util.Map<String, BeezUpCommonLinkParameterProperty3> properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public BeezUpCommonLinkParameter3 withRequired(Boolean required) {
        this.required = required;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schema")
    public String schema;
    public BeezUpCommonLinkParameter3 withSchema(String schema) {
        this.schema = schema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public BeezUpCommonParameterTypeEnum type;
    public BeezUpCommonLinkParameter3 withType(BeezUpCommonParameterTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public java.util.Map<String, Object> value;
    public BeezUpCommonLinkParameter3 withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
}